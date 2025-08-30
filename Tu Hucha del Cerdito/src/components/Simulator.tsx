import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../types';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
};

const SliderInput: React.FC<{
    label: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min: number;
    max: number;
    step: number;
    unit?: string;
    error?: string | null;
}> = ({ label, value, onChange, min, max, step, unit = "", error }) => {

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label htmlFor={`${label}-input`} className="font-medium text-slate-700">
                    {label}
                </label>
                <div className={`flex items-center bg-stone-100 rounded-full border ${error ? 'border-red-400' : 'border-stone-200'}`}>
                    {unit === '€' && <span className="text-slate-500 pl-3 pr-1">€</span>}
                    <input
                        type="number"
                        id={`${label}-input`}
                        value={String(value)}
                        onChange={onChange}
                        min={min}
                        max={max}
                        step={step}
                        className="w-28 font-bold text-slate-900 text-right bg-transparent border-0 focus:ring-0 py-1 pr-3 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        aria-label={label}
                    />
                    {unit !== '€' && <span className="text-slate-500 pr-3 pl-1">{unit.trim()}</span>}
                </div>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                aria-label={`${label} slider`}
            />
            {error && <p className="text-red-600 text-xs mt-1 text-right">{error}</p>}
        </div>
    );
};

const InvestmentSuggestion: React.FC<{ rate: number }> = ({ rate }) => {
    let suggestion = null;

    if (rate <= 3.5) {
        suggestion = (
            <div>
                <h5 className="font-bold text-slate-700">Cuentas Remuneradas y Depósitos</h5>
                <p className="text-slate-600 mt-1">Para rentabilidades bajas y seguras como esta, las <span className="font-semibold">cuentas de ahorro remuneradas</span> o los <span className="font-semibold">depósitos a plazo fijo</span> son ideales. Tu dinero está seguro y te da un pequeño extra para combatir la inflación. ¡Perfecto para tu fondo de emergencia!</p>
            </div>
        );
    } else if (rate > 3.5 && rate <= 6.5) {
        suggestion = (
            <div>
                <h5 className="font-bold text-slate-700">Bonos y Fondos Conservadores</h5>
                <p className="text-slate-600 mt-1">En este rango, puedes considerar <span className="font-semibold">Bonos del Estado</span> o <span className="font-semibold">fondos de inversión de renta fija (conservadores)</span>. Ofrecen más rentabilidad que una cuenta de ahorro con un riesgo muy controlado. Son buenos para metas a medio plazo.</p>
            </div>
        );
    } else {
        suggestion = (
            <div>
                <h5 className="font-bold text-slate-700">Fondos Indexados (ETFs)</h5>
                <p className="text-slate-600 mt-1">Para buscar rentabilidades superiores a largo plazo, los <span className="font-semibold">fondos indexados al mercado global (ETFs)</span> son la opción más recomendada por su diversificación y bajas comisiones. Ten en cuenta que su valor sube y baja, ¡la paciencia es clave!</p>
            </div>
        );
    }

    return (
        <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 transition-all duration-300 animate-fade-in-up">
            {suggestion}
        </div>
    )
};

const Simulator: React.FC = () => {
    const [initialAmount, setInitialAmount] = useState(1000);
    const [monthlyContribution, setMonthlyContribution] = useState(100);
    const [interestRate, setInterestRate] = useState(5);
    const [years, setYears] = useState(10);

    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [chartData, setChartData] = useState<any[]>([]);
    const [totals, setTotals] = useState({ totalSaved: 0, interestGenerated: 0, totalContributions: 0 });

    const createInputHandler = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        min: number,
        max: number,
        name: string
    ) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setter(0);
            setErrors(prev => ({ ...prev, [name]: 'El valor es requerido.' }));
            return;
        }

        const num = Number(value);
        if (isNaN(num)) {
            setErrors(prev => ({ ...prev, [name]: 'Debe ser un número.' }));
            return;
        }

        setter(num);

        if (num < min || num > max) {
            setErrors(prev => ({ ...prev, [name]: `Debe estar entre ${min} y ${max}.` }));
        } else {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };
    
    const hasErrors = Object.values(errors).some(error => error !== null);

    useEffect(() => {
        if (hasErrors) {
            setChartData([]);
            setTotals({ totalSaved: 0, interestGenerated: 0, totalContributions: 0 });
            return;
        };

        const calculateCompoundInterest = () => {
            let futureValue = initialAmount;
            let totalContributions = initialAmount;
            const dataPoints = [{ year: 0, 'Tu Dinero': initialAmount, 'Aportaciones': initialAmount, 'Intereses': 0 }];
            const annualContribution = monthlyContribution * 12;

            for (let i = 1; i <= years; i++) {
                const interestEarnedThisYear = futureValue * (interestRate / 100);
                futureValue += interestEarnedThisYear + annualContribution;
                totalContributions += annualContribution;
                
                 if (i % (Math.ceil(years/10)) === 0 || i === years || years <= 10) { 
                    const totalInterest = futureValue - totalContributions;
                    dataPoints.push({
                        year: i,
                        'Tu Dinero': parseFloat(futureValue.toFixed(2)),
                        'Aportaciones': parseFloat(totalContributions.toFixed(2)),
                        'Intereses': parseFloat(totalInterest.toFixed(2))
                    });
                }
            }
            
            const finalTotalContributions = initialAmount + annualContribution * years;
            const totalInterest = futureValue - finalTotalContributions;
            setChartData(dataPoints);
            setTotals({ totalSaved: futureValue, interestGenerated: totalInterest, totalContributions: finalTotalContributions });
        };

        calculateCompoundInterest();
    }, [initialAmount, monthlyContribution, interestRate, years, hasErrors]);
    
    const roi = totals.totalContributions > 0 ? (totals.interestGenerated / totals.totalContributions) * 100 : 0;

    return (
        <div className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simulador de Interés Compuesto</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">¡Mira crecer tu dinero! Ajusta los valores y observa cómo el interés compuesto trabaja para ti a lo largo del tiempo.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm space-y-6 animate-fade-in-up">
                         <SliderInput label="Cantidad Inicial" value={initialAmount} onChange={createInputHandler(setInitialAmount, 0, 50000, 'initial')} min={0} max={50000} step={100} unit="€" error={errors.initial}/>
                         <SliderInput label="Aporte Mensual" value={monthlyContribution} onChange={createInputHandler(setMonthlyContribution, 0, 2000, 'monthly')} min={0} max={2000} step={10} unit="€" error={errors.monthly}/>
                         <SliderInput label="Tasa de Interés Anual" value={interestRate} onChange={createInputHandler(setInterestRate, 0, 20, 'rate')} min={0} max={20} step={0.5} unit="%" error={errors.rate}/>
                         <SliderInput label="Período" value={years} onChange={createInputHandler(setYears, 1, 50, 'years')} min={1} max={50} step={1} unit=" años" error={errors.years}/>
                    </div>
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm flex flex-col animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Proyección de Crecimiento</h3>
                        <div className="w-full h-80">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis dataKey="year" unit=" años" tick={{ fill: '#475569' }} />
                                    <YAxis tickFormatter={(value) => formatCurrency(Number(value))} tick={{ fill: '#475569' }} width={80}/>
                                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }} formatter={(value: number) => formatCurrency(value)}/>
                                    <Legend wrapperStyle={{ color: '#475569' }} />
                                    <Bar dataKey="Aportaciones" stackId="a" fill="#94a3b8" name="Total Aportado" />
                                    <Bar dataKey="Intereses" stackId="a" fill="#facc15" name="Intereses Generados" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                         { hasErrors ? (
                            <div className="mt-6 border-t border-stone-200 pt-6 flex items-center justify-center text-center">
                                <p className="text-slate-500">Por favor, corrige los errores en los campos para ver la simulación.</p>
                            </div>
                        ) : (
                        <div className="mt-6 border-t border-stone-200 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-sm text-slate-500">Total Ahorrado</p>
                                <p className="text-2xl font-bold text-slate-900 transition-all duration-300">{formatCurrency(totals.totalSaved)}</p>
                            </div>
                             <div>
                                <p className="text-sm text-slate-500">Interés Generado</p>
                                <p className="text-2xl font-bold text-yellow-600 transition-all duration-300">{formatCurrency(totals.interestGenerated)}</p>
                            </div>
                             <div>
                                <p className="text-sm text-slate-500">Rendimiento (ROI)</p>
                                <p className="text-2xl font-bold text-green-600 transition-all duration-300">{roi.toFixed(2)}%</p>
                            </div>
                        </div>
                        )}
                        <div className="mt-8 border-t border-stone-200 pt-6">
                            <h4 className="text-lg font-semibold text-center text-slate-800 mb-4">¿Dónde encontrar esta rentabilidad?</h4>
                            <InvestmentSuggestion rate={interestRate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulator;