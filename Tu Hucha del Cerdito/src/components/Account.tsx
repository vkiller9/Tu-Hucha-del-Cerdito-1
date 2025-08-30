import React, { useState, useEffect, useMemo } from 'react';
import { Transaction, Achievement } from '../types';
import { ACHIEVEMENTS_DATA } from '../constants';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
};

const Account: React.FC = () => {
    const [balance, setBalance] = useState(1000);
    const [savings, setSavings] = useState(500);
    const [investments, setInvestments] = useState(200);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());

    const [formType, setFormType] = useState<'ingreso' | 'gasto'>('ingreso');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const savedAchievements = localStorage.getItem('unlockedAchievements');
        if (savedAchievements) {
            setUnlockedAchievements(new Set(JSON.parse(savedAchievements)));
        }
    }, []);
    
    const checkAchievements = (updatedState: any) => {
        const newAchievements = new Set(unlockedAchievements);
        const { transactions, savings: currentSavings } = updatedState;

        if (transactions.some(t => t.type === 'ingreso') && !newAchievements.has('first_income')) newAchievements.add('first_income');
        if (transactions.some(t => t.type === 'gasto') && !newAchievements.has('first_expense')) newAchievements.add('first_expense');
        
        const totalIncome = transactions.filter(t => t.type === 'ingreso').reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = transactions.filter(t => t.type === 'gasto').reduce((sum, t) => sum + t.amount, 0);
        if (totalIncome > totalExpense && !newAchievements.has('positive_balance')) newAchievements.add('positive_balance');

        if (currentSavings > 500 && !newAchievements.has('first_savings')) newAchievements.add('first_savings');
        if (currentSavings > 1000 && !newAchievements.has('big_saver')) newAchievements.add('big_saver');
        // 'first_investment' achievement is handled in its specific function

        if (newAchievements.size > unlockedAchievements.size) {
            setUnlockedAchievements(newAchievements);
            localStorage.setItem('unlockedAchievements', JSON.stringify(Array.from(newAchievements)));
        }
    };
    
    const handleAddTransaction = (e: React.FormEvent) => {
        e.preventDefault();
        const numAmount = parseFloat(amount);
        if (!description || !numAmount || numAmount <= 0) return;

        const newTransaction: Transaction = {
            id: Date.now(),
            type: formType,
            description,
            amount: numAmount,
        };

        const newTransactions = [newTransaction, ...transactions];
        setTransactions(newTransactions);

        if (formType === 'ingreso') {
            setBalance(prev => prev + numAmount);
        } else {
            setBalance(prev => prev - numAmount);
        }
        
        checkAchievements({ transactions: newTransactions, savings });
        setDescription('');
        setAmount('');
    };
    
    const handleTransfer = (to: 'savings' | 'investments', transferAmount: number) => {
        if (balance >= transferAmount) {
            setBalance(prev => prev - transferAmount);
            if(to === 'savings') setSavings(prev => prev + transferAmount);
            if(to === 'investments') {
                setInvestments(prev => prev + transferAmount);
                if (!unlockedAchievements.has('first_investment')) {
                     const newAchievements = new Set(unlockedAchievements);
                     newAchievements.add('first_investment');
                     setUnlockedAchievements(newAchievements);
                     localStorage.setItem('unlockedAchievements', JSON.stringify(Array.from(newAchievements)));
                }
            }
        }
    };

    return (
        <div className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tu Centro de Control Financiero</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Aquí puedes simular tus finanzas, añadir ingresos, gastos y ver cómo tus decisiones afectan tu dinero. ¡Gana logros por tus buenos hábitos!
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Panel */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Balance Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                               <p className="text-sm font-semibold text-slate-500">Balance Actual</p>
                               <p className="text-3xl font-bold text-slate-900 mt-2">{formatCurrency(balance)}</p>
                           </div>
                           <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                               <p className="text-sm font-semibold text-slate-500">Ahorrado</p>
                               <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(savings)}</p>
                           </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                               <p className="text-sm font-semibold text-slate-500">Invertido</p>
                               <p className="text-3xl font-bold text-sky-600 mt-2">{formatCurrency(investments)}</p>
                           </div>
                        </div>

                        {/* Transaction Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-slate-800">Añadir Movimiento</h3>
                            <div className="flex bg-stone-100 p-1 rounded-full mb-4">
                                <button onClick={() => setFormType('ingreso')} className={`w-1/2 py-2 rounded-full font-semibold transition-colors ${formType === 'ingreso' ? 'bg-white shadow' : 'text-slate-500'}`}>Ingreso</button>
                                <button onClick={() => setFormType('gasto')} className={`w-1/2 py-2 rounded-full font-semibold transition-colors ${formType === 'gasto' ? 'bg-white shadow' : 'text-slate-500'}`}>Gasto</button>
                            </div>
                            <form onSubmit={handleAddTransaction} className="space-y-4">
                                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción (ej: Nómina, Supermercado)" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" />
                                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Cantidad en €" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" />
                                <button type="submit" className={`w-full py-3 font-semibold text-white rounded-lg transition-colors ${formType === 'ingreso' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}>Añadir {formType}</button>
                            </form>
                        </div>
                        
                         {/* Transfer Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-slate-800">Mover Dinero</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => handleTransfer('savings', 100)} className="flex-1 bg-slate-800 text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition-colors">Ahorrar 100€</button>
                                <button onClick={() => handleTransfer('investments', 100)} className="flex-1 bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition-colors">Invertir 100€</button>
                            </div>
                        </div>
                        
                        {/* Transaction List */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                             <h3 className="text-xl font-semibold mb-4 text-slate-800">Últimos Movimientos</h3>
                             <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                                {transactions.length > 0 ? transactions.map(t => (
                                    <div key={t.id} className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                                        <p className="font-medium text-slate-700">{t.description}</p>
                                        <p className={`font-bold ${t.type === 'ingreso' ? 'text-green-600' : 'text-red-600'}`}>{t.type === 'ingreso' ? '+' : '-'}{formatCurrency(t.amount)}</p>
                                    </div>
                                )) : <p className="text-slate-500 text-center py-4">Aún no hay movimientos.</p>}
                             </div>
                        </div>

                    </div>
                    {/* Achievements Panel */}
                    <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Logros</h3>
                        <div className="space-y-4">
                            {ACHIEVEMENTS_DATA.map(ach => {
                                const isUnlocked = unlockedAchievements.has(ach.id);
                                return (
                                    <div key={ach.id} className={`p-4 rounded-lg flex items-start space-x-4 transition-all ${isUnlocked ? 'bg-yellow-100 border-yellow-300 border' : 'bg-stone-100 opacity-60'}`}>
                                        <div className={`p-2 rounded-full ${isUnlocked ? 'bg-yellow-400' : 'bg-stone-300'}`}>
                                            <ach.icon className={`h-6 w-6 ${isUnlocked ? 'text-white' : 'text-stone-500'}`} />
                                        </div>
                                        <div>
                                            <p className={`font-bold ${isUnlocked ? 'text-yellow-900' : 'text-slate-600'}`}>{ach.title}</p>
                                            <p className={`text-sm ${isUnlocked ? 'text-yellow-800' : 'text-slate-500'}`}>{ach.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
