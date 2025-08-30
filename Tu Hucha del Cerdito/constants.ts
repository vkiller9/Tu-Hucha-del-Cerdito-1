import { Page, Tip, QuizQuestion, Achievement } from './types';
import { ShoppingCartIcon } from './components/icons/ShoppingCartIcon';
import { ClockIcon } from './components/icons/ClockIcon';
import { BrokenChainIcon } from './components/icons/BrokenChainIcon';
import { PiggyBankIcon } from './components/icons/PiggyBankIcon';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { LightbulbIcon } from './components/icons/LightbulbIcon';
import { ChartBarIcon } from './components/icons/ChartBarIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { FriendlyGuideIcon } from './components/icons/FriendlyGuideIcon';
import { StarIcon } from './components/icons/StarIcon';
import { BankIcon } from './components/icons/BankIcon';
import { GovernmentBuildingIcon } from './components/icons/GovernmentBuildingIcon';
import { BasketIcon } from './components/icons/BasketIcon';
import { DividendIcon } from './components/icons/DividendIcon';
import { TrendingDownIcon } from './components/icons/TrendingDownIcon';
import { CashIcon } from './components/icons/CashIcon';
import { ToolboxIcon } from './components/icons/ToolboxIcon';
import { BuildingOfficeIcon } from './components/icons/BuildingOfficeIcon';
import { BrainIcon } from './components/icons/BrainIcon';
import { RetirementIcon } from './components/icons/RetirementIcon';
import { CrossroadsIcon } from './components/icons/CrossroadsIcon';
import { LinkIcon } from './components/icons/LinkIcon';
import { TrophyIcon } from './components/icons/TrophyIcon';
import { PlantIcon } from './components/icons/PlantIcon';


export const NAV_LINKS = [Page.Home, Page.Tips, Page.Simulator, Page.Quiz, Page.Account];

const GUIDE_AUTHOR = {
  name: 'Ana, tu guía financiera',
  avatar: FriendlyGuideIcon,
};

export const TIPS_DATA: Tip[] = [
  {
    id: 100,
    category: 'Guía Principal',
    title: 'Cómo Empezar: Tu Dinero Puede Crecer',
    icon: StarIcon,
    description: 'La guía definitiva para principiantes. Entiende por qué tu dinero pierde valor y descubre los primeros pasos seguros para ahorrar e invertir, explicados de forma súper sencilla.',
    featured: true,
    author: GUIDE_AUTHOR,
    content: [
      "¿Sientes que nunca es buen momento para empezar a pensar en el dinero? ¡Vamos a cambiar eso! Esta guía es tu primer paso. Te enseñaré, sin palabras raras, por qué es importante hacer algo con tus ahorros y cómo empezar hoy mismo, con poco y de forma segura.",
      "Primero, entendamos el problema: la inflación. Suena técnico, pero es muy simple. Imagina que hoy un café te cuesta 1,50€. Si la vida se encarece un 3% al año (inflación), el año que viene ese mismo café te costará casi 1,55€. Tus 1,50€ ya no son suficientes. Si tu dinero está quieto en una cuenta normal, cada año puedes comprar menos cosas. ¡Está perdiendo valor sin que te des cuenta!",
      {
        icon: BankIcon,
        subheading: 'Paso 1: La Base Segura (Cuentas Remuneradas)',
        text: "Antes de correr, hay que andar. La forma más fácil y segura de que tu dinero no pierda tanto valor es una 'cuenta remunerada'. Es como una cuenta normal, pero el banco te 'paga' un pequeño interés por tener tu dinero ahí. Fíjate en el TAE: si es del 2-3%, ya estás luchando contra la inflación. Es el lugar perfecto para tu fondo de emergencia."
      },
      {
        icon: GovernmentBuildingIcon,
        subheading: 'Paso 2: Crecimiento Tranquilo (Bonos del Estado)',
        text: "Cuando ya tienes una base, puedes dar un pasito más. Comprar 'Bonos del Estado' es como prestarle dinero al gobierno. Es una de las inversiones más seguras que existen. Le dejas tu dinero durante un tiempo y, al final, te lo devuelve con un extra. Es una forma de crecer sin sustos, ideal para metas a largo plazo."
      },
      {
        icon: BasketIcon,
        subheading: 'Paso 3: El Siguiente Nivel (ETFs)',
        text: "Aquí empieza lo interesante. Invertir en un ETF es como comprar una 'cesta de la compra' que ya viene llena con trocitos de las empresas más grandes del mundo (como Apple, Coca-Cola, etc.). Si a una empresa le va mal, las otras lo compensan. Es la forma más barata y sencilla de invertir de forma diversificada y que tu dinero crezca de verdad con el tiempo."
      },
      {
        icon: DividendIcon,
        subheading: 'Extra: ¡Pequeños Premios! (Dividendos)',
        text: "Algunas de las empresas que están en esa 'cesta' (el ETF) reparten una parte de sus beneficios entre los que han confiado en ellas. ¡Eso son los dividendos! Es un dinerito extra que recibes solo por tener tu inversión, y que puedes volver a invertir para que la bola de nieve se haga aún más grande."
      },
      "No necesitas ser un experto ni tener mucho dinero. Lo importante es empezar. Con estos pasos, ya sabes más que el 90% de la gente. ¡Tu viaje hacia un futuro financiero más tranquilo empieza ahora!"
    ],
  },
   {
    id: 15,
    category: 'Herramientas',
    title: 'Herramientas y Plataformas para Empezar',
    icon: LinkIcon,
    description: '¿Listo para dar el paso? Te presentamos ejemplos de apps y webs reales donde puedes abrir tu primera cuenta o hacer tu primera inversión.',
    author: GUIDE_AUTHOR,
    content: [
      "Saber la teoría está genial, pero... ¿dónde se hace todo esto en la práctica? ¡Buena pregunta! Aquí te dejo algunos tipos de plataformas que te encontrarás. Investiga y elige la que mejor se adapte a ti.",
      {
        icon: BankIcon,
        subheading: 'Neobancos y Cuentas Remuneradas',
        text: "Son bancos 100% digitales que suelen ofrecer cuentas de ahorro con intereses (TAE) más atractivos que los bancos tradicionales. Son perfectos para tu fondo de emergencia y para empezar a combatir la inflación sin riesgo. Ejemplos: MyInvestor, Trade Republic (ofrecen cuentas remuneradas), Revolut, N26."
      },
      {
        icon: ToolboxIcon,
        subheading: 'Robo-Advisors: Inversión en Piloto Automático',
        text: "Son la forma más fácil de empezar a invertir en fondos indexados (las 'cestas' de empresas). Haces un test inicial para ver tu perfil de riesgo y ellos se encargan de todo: crean tu cartera diversificada y la gestionan por ti a un coste muy bajo. Ideal para quien no quiere complicarse. Ejemplos: Indexa Capital, Finizens."
      },
      {
        icon: BuildingOfficeIcon,
        subheading: 'Brókers: Para Tomar el Control',
        text: "Un bróker es una plataforma que te permite comprar y vender tú mismo acciones, ETFs y otros productos. Requiere un poco más de conocimiento, pero te da total libertad. Busca brókers con comisiones bajas. Ejemplos para empezar: DEGIRO, XTB, eToro."
      },
      "Recuerda: esta no es una recomendación de inversión. Haz tu propia investigación antes de meter tu dinero en cualquier sitio. ¡Lo importante es que sepas que estas herramientas existen y están a tu alcance!"
    ],
  },
   {
    id: 12,
    category: 'Mentalidad',
    title: 'Psicología del Dinero: Tus Emociones y tu Cartera',
    icon: BrainIcon,
    description: 'El mayor enemigo de tu dinero no es el mercado, ¡son tus propios impulsos! Aprende a reconocer las trampas emocionales para tomar mejores decisiones.',
    author: GUIDE_AUTHOR,
    content: [
      "Hablemos claro: saber de finanzas es importante, pero controlar tus emociones con el dinero lo es todavía más. La mayoría de los grandes errores no se cometen por no saber, sino por dejarse llevar por el miedo o la euforia.",
      {
        icon: TrendingDownIcon,
        subheading: 'La Trampa 1: El Pánico Vendedor',
        text: "Ves que tus inversiones bajan un 10%. Tu cerebro grita: '¡Vende todo antes de que valga cero!'. Es un instinto de supervivencia, pero en inversión es un error fatal. Vender barato por miedo es la forma más segura de perder dinero. Los mercados siempre tienen altibajos. La clave es tener un plan y aguantar el chaparrón. Recuerda: no has perdido nada hasta que no vendes."
      },
      {
        icon: CashIcon,
        subheading: 'La Trampa 2: La Euforia Compradora (FOMO)',
        text: "Todo el mundo habla de esa acción o criptomoneda que no para de subir. Sientes que te estás perdiendo la fiesta y compras por 'miedo a quedarte fuera' (FOMO). El problema es que sueles llegar tarde, cuando el precio ya está por las nubes, y compras caro. No inviertas porque algo esté de moda, invierte porque encaja en tu plan a largo plazo."
      },
      {
        icon: ToolboxIcon,
        subheading: 'El Antídoto: Ten un Plan y Automatiza',
        text: "La mejor vacuna contra las emociones es tener un plan de inversión escrito. Decide de antemano cuánto vas a invertir, en qué productos y con qué frecuencia. Y lo más importante: automatiza tus aportaciones. Si cada mes inviertes una cantidad fija pase lo que pase, eliminas la decisión emocional del momento. Confía en tu plan, no en tus impulsos."
      },
    ]
  },
  {
    id: 9,
    category: 'Conceptos Clave',
    title: 'El Ladrón Invisible: ¿Por qué mi dinero vale menos?',
    icon: TrendingDownIcon,
    description: 'Descubre qué es la inflación y por qué dejar tu dinero parado en el banco es como dejar que un ladrón silencioso se lleve tus ahorros poco a poco.',
    author: GUIDE_AUTHOR,
    content: [
      "¿Alguna vez has pensado 'juraría que antes con 20€ llenaba más el carro'? No es tu imaginación, ¡es la inflación!",
      "La inflación es el aumento general de los precios de todo: la comida, la gasolina, la ropa... Esto significa que con el mismo euro, cada año puedes comprar un poquito menos. Es como un ladrón invisible y muy lento que le va quitando valor a tu dinero.",
      "Ejemplo real: Imagina que quieres comprar una bici que hoy cuesta 300€. Guardas 300€ debajo del colchón. Al año siguiente, por la inflación, la misma bici cuesta 310€. Tus 300€ ya no son suficientes. Has perdido 'poder de compra'.",
      "Si tu dinero está en una cuenta corriente normal que no te da intereses (o te da un 0,01%), estás perdiendo dinero cada día sin darte cuenta. El banco está seguro, sí, pero tu capacidad de comprar cosas en el futuro se está reduciendo.",
      "Por eso es tan importante que tus ahorros, como mínimo, crezcan a un ritmo parecido al de la inflación. Necesitas poner tu dinero a trabajar para que no se lo coma este ladrón silencioso. ¡Las cuentas remuneradas o la inversión son tus mejores armas para combatirlo!",
    ]
  },
  {
    id: 10,
    category: 'Conceptos Clave',
    title: '¿Qué es el Interés? El Salario de tu Dinero',
    icon: CashIcon,
    description: 'El interés no es bueno ni malo, ¡depende de si lo pagas o lo ganas! Aprende cómo funciona y cómo el "interés compuesto" puede ser tu mejor amigo.',
    author: GUIDE_AUTHOR,
    content: [
      "Piénsalo así: el interés es el precio del dinero. Si pides un préstamo, pagas un interés por usar un dinero que no es tuyo. Pero si ahorras o inviertes, ¡te lo pagan a ti por usar el tuyo! Es como el salario que gana tu dinero.",
      "Hay dos tipos:",
      "1. Interés Simple: Es fácil. Si pones 100€ en un sitio que te da un 5% de interés simple al año, cada año ganarás 5€. Y ya está. Siempre ganarás 5€ sobre los 100€ iniciales.",
      "2. Interés Compuesto: ¡Aquí está la magia! Es la famosa 'bola de nieve'. El primer año ganas 5€ de interés. El segundo año, el interés no se calcula sobre 100€, sino sobre 105€ (tu dinero + los intereses que ya ganaste). Así que ganarás 5,25€. Parece poco, pero con el tiempo, este efecto es brutal. Los intereses generan nuevos intereses, y la bola de nieve crece cada vez más rápido sin que hagas nada.",
      "El interés compuesto es tu mayor aliado para construir riqueza a largo plazo. Cuanto antes empieces a ponerlo a trabajar, más grande se hará tu bola de nieve. ¡Incluso con pequeñas cantidades!",
    ]
  },
    {
    id: 11,
    category: 'Inversión',
    title: 'Tu Caja de Herramientas para Invertir',
    icon: ToolboxIcon,
    description: 'Desde lo más seguro a lo más atrevido. Conoce las herramientas básicas para construir tu futuro financiero y elige las que mejor se adapten a ti.',
    author: GUIDE_AUTHOR,
    content: [
      "Invertir no es apostar en un casino. Es usar diferentes herramientas para que tu dinero crezca con el tiempo. Cada herramienta tiene su función y su nivel de riesgo. ¡Vamos a ver las más importantes!",
      {
        icon: BankIcon,
        subheading: 'Lo Básico: Cuentas Remuneradas y Depósitos',
        text: "Son las herramientas más seguras. Una cuenta remunerada te da un pequeño interés solo por tener el dinero. Un depósito a plazo fijo es parecido, pero te comprometes a no tocar el dinero durante un tiempo (meses o años) a cambio de un interés un poco mayor. Riesgo: Casi nulo. Ideal para: Tu fondo de emergencia y ahorros a corto plazo."
      },
      {
        icon: GovernmentBuildingIcon,
        subheading: 'El Nivel Prudente: Bonos',
        text: "Comprar un bono es como hacerle un préstamo a un gobierno o a una gran empresa. A cambio, te pagan un interés fijo cada cierto tiempo y al final te devuelven todo tu dinero. Riesgo: Muy bajo (especialmente los del Estado). Ideal para: Crecer de forma segura y estable a largo plazo."
      },
       {
        icon: BuildingOfficeIcon,
        subheading: 'El Nivel Emprendedor: Acciones',
        text: "Comprar una acción es comprar un trocito diminuto de una empresa (como Apple, Zara o el banco de tu barrio). Si a la empresa le va bien, el valor de tu trocito sube. Si le va mal, baja. Riesgo: Alto. Puedes ganar mucho, pero también perder. Ideal para: Inversores con paciencia y que entienden que habrá subidas y bajadas."
      },
      {
        icon: BasketIcon,
        subheading: 'La Opción Inteligente: Fondos de Inversión y ETFs',
        text: "Son la herramienta estrella para la mayoría. En lugar de comprar una sola acción, compras una 'cesta' que ya trae cientos o miles de acciones y bonos diferentes. Así, si a uno le va mal, los otros lo compensan (¡diversificación!). Son baratos y automáticos. Riesgo: Medio (depende de la cesta que elijas). Ideal para: ¡Casi todo el mundo! Es la forma más fácil y sensata de invertir a largo plazo."
      },
    ]
  },
  {
    id: 13,
    category: 'Planificación',
    title: 'Pensando en Mañana: ¿Qué son los Planes de Pensiones?',
    icon: RetirementIcon,
    description: 'Descubre una de las herramientas más potentes para tu jubilación. Te explicamos cómo funcionan y por qué el Estado te "premia" por usarlos.',
    author: GUIDE_AUTHOR,
    content: [
      "La jubilación parece algo muy lejano, ¿verdad? Pero tu 'yo del futuro' te agradecerá que empieces a pensar en ella hoy. Una de las mejores herramientas para esto es el Plan de Pensiones.",
      "Imagina un plan de pensiones como una hucha especial para tu jubilación. Vas metiendo dinero poco a poco, y ese dinero se invierte para que crezca durante todos estos años. La clave es que no puedes (ni debes) tocarlo hasta que te jubiles.",
      {
        icon: StarIcon,
        subheading: 'El Superpoder: ¡Pagas Menos Impuestos!',
        text: "Aquí viene lo bueno. El dinero que metes en tu plan de pensiones cada año 'reduce' tu sueldo a los ojos de Hacienda. Por ejemplo, si ganas 25.000€ y aportas 1.500€ a tu plan, para Hacienda es como si solo hubieras ganado 23.500€. Esto hace que en tu declaración de la renta te devuelvan dinero. ¡El Estado te está premiando por ahorrar para tu futuro!"
      },
      {
        icon: PiggyBankIcon,
        subheading: '¿Es para mí?',
        text: "Sí, si tienes un horizonte a largo plazo. Es un complemento perfecto a otras inversiones como los fondos. No debería ser tu única inversión, pero sí una parte importante de tu estrategia para la jubilación. Empieza con poco, pero sé constante. Tu 'yo del futuro' se dará un festín gracias a las pequeñas decisiones que tomes hoy."
      },
    ]
  },
   {
    id: 14,
    category: 'Conceptos Clave',
    title: 'El Dinero Invisible: El Coste de Oportunidad',
    icon: CrossroadsIcon,
    description: 'Cada euro que gastas tiene un "coste invisible": lo que podría haber llegado a ser si lo hubieras invertido. Entiende este concepto y cambiarás tu forma de ver los gastos.',
    author: GUIDE_AUTHOR,
    content: [
      "Vamos a hablar de un concepto que, cuando lo entiendes, te cambia el chip para siempre: el coste de oportunidad.",
      "Es muy simple: el coste real de algo no es solo el dinero que pagas por ello, sino también lo que dejas de ganar con ese dinero si lo hubieras usado de otra forma. Es el 'coste invisible' de tus decisiones.",
      {
        icon: ShoppingCartIcon,
        subheading: 'Ejemplo: El Móvil de 1.000€',
        text: "Te quieres comprar el último móvil, que cuesta 1.000€. El coste no son solo esos 1.000€. El coste de oportunidad es lo que esos 1.000€ podrían haber sido si los hubieras invertido. Si los metes en un fondo de inversión que te da un 7% de media al año, en 30 años esos 1.000€ se habrían convertido en más de 7.600€. El móvil no te ha costado 1.000€, ¡te ha costado 7.600€ de tu 'yo futuro'!"
      },
      {
        icon: LightbulbIcon,
        subheading: '¿Significa que no puedo comprarme nada?',
        text: "¡Para nada! Significa tomar decisiones conscientes. Quizás ese móvil te hace muy feliz y te compensa. ¡Perfecto! Pero quizás prefieras un móvil de 400€ e invertir los otros 600€. Este concepto te ayuda a valorar si un gasto te da una satisfacción inmediata que valga lo que estás 'sacrificando' en tu futuro. Te da el poder de decidir con toda la información."
      },
    ]
  },
  {
    id: 5,
    category: 'Ahorro',
    title: 'Fondo de Emergencia: Tu Red',
    icon: ShieldIcon,
    description: 'Cómo construir un colchón financiero para imprevistos sin sentir que te ahogas.',
    content: [
      'Imagina que se te rompe el coche o tienes un gasto inesperado. ¿Qué haces? Para eso está el fondo de emergencia, tu red de seguridad personal.',
      'No te agobies pensando que necesitas miles de euros desde el principio. Empieza con una meta pequeña, como ahorrar 500€. ¡Cada euro cuenta y te dará tranquilidad!',
      'El truco para que funcione es automatizarlo. Programa una transferencia fija cada mes (aunque sean 20€) a una cuenta de ahorros separada. Así, ahorras sin darte ni cuenta.',
      '¿Recibes un ingreso extra? ¿Un pequeño bono en el trabajo, un regalo de cumpleaños? ¡Directo al fondo de emergencia! Verás cómo crece más rápido.',
      'El objetivo ideal, a largo plazo, es tener ahorrado el equivalente a entre 3 y 6 meses de tus gastos fijos. Así, si algo pasa, tendrás tiempo para solucionarlo sin agobios.'
    ],
    author: GUIDE_AUTHOR,
  },
];


export const QUIZ_DATA: QuizQuestion[] = [
    {
        id: 1,
        situation: "Guardas 100€ en una hucha y la inflación anual (el aumento de los precios) es del 3%.",
        question: "¿Qué podrás comprar con esos 100€ después de un año?",
        options: ["Más cosas que antes", "Exactamente las mismas cosas", "Menos cosas que antes", "No se puede saber"],
        correctAnswerIndex: 2,
        explanation: "La inflación hace que tu dinero 'valga menos' porque las cosas se vuelven más caras. Tus 100€ seguirán siendo 100€, pero solo podrás comprar lo que antes costaba 97€. Por eso es clave que tu dinero crezca.",
        difficulty: 'simple',
    },
    {
        id: 2,
        situation: "Tienes una deuda de 1.000€ en una tarjeta de crédito que te cobra un 20% de interés al año.",
        question: "Si solo pagas la cuota mínima cada mes, ¿qué es lo más probable que ocurra?",
        options: ["La deuda desaparecerá rápido", "Tardarás muchísimimos años en pagarla y acabarás pagando miles de euros solo en intereses", "El banco te perdonará la deuda", "El interés dejará de sumarse"],
        correctAnswerIndex: 1,
        explanation: "Pagar solo el mínimo es una trampa. La mayor parte de tu pago se va a cubrir los intereses, y muy poco a reducir la deuda real. Es la forma más lenta y cara de pagar una deuda.",
        difficulty: 'simple',
    },
    {
        id: 3,
        question: "¿Para qué sirve principalmente un 'fondo de emergencia'?",
        options: ["Para darte un capricho o irte de vacaciones", "Para cubrir gastos grandes e inesperados (como una avería del coche) sin tener que pedir un préstamo", "Para invertir en algo arriesgado y ganar dinero rápido", "Para comprar el último modelo de móvil"],
        correctAnswerIndex: 1,
        explanation: "Un fondo de emergencia es tu red de seguridad. Es un dinero ahorrado y fácil de coger para solucionar imprevistos sin fastidiar tus planes ni tener que endeudarte. ¡Es paz mental!",
        difficulty: 'simple',
    },
    {
        id: 4,
        situation: "Ganas 1.500€ al mes y decides usar la regla de presupuesto 50/30/20.",
        question: "¿Cuánto dinero deberías intentar ahorrar o invertir cada mes?",
        options: ["750€ (50%)", "450€ (30%)", "300€ (20%)", "Nada, es imposible ahorrar"],
        correctAnswerIndex: 2,
        explanation: "La regla 50/30/20 es una guía fácil: 50% para lo que necesitas (alquiler, comida), 30% para lo que te apetece (ocio) y un 20% para tu 'yo del futuro' (ahorro e inversión). En este caso, el 20% de 1.500€ es 300€.",
        difficulty: 'simple',
    },
     {
        id: 15,
        situation: "Estás en la cola del supermercado y ves una chocolatina en oferta que no tenías en tu lista de la compra.",
        question: "¿Qué tipo de gasto representa esa chocolatina si la compras?",
        options: ["Un gasto fijo", "Un gasto necesario", "Un gasto por impulso", "Una inversión"],
        correctAnswerIndex: 2,
        explanation: "Los gastos por impulso son pequeñas compras no planificadas que pueden sabotear tu presupuesto. Ser consciente de ellos es el primer paso para controlarlos y ahorrar más.",
        difficulty: 'simple',
    },
    {
        id: 6,
        situation: "David tiene un fondo de emergencia de 2.000€ y un amigo le habla de una inversión que promete un 20% de ganancias al año.",
        question: "¿Qué es lo más inteligente que puede hacer David?",
        options: ["Invertir todo su fondo de emergencia para no perder la oportunidad", "Invertir la mitad, por si acaso", "No tocar su fondo de emergencia bajo ningún concepto", "Pedir un préstamo para invertir aún más"],
        correctAnswerIndex: 2,
        explanation: "¡El fondo de emergencia es sagrado! Su único trabajo es estar ahí, seguro y disponible, para imprevistos. Nunca debe invertirse en productos con riesgo, por muy tentadores que parezcan.",
        difficulty: 'simple',
    },
    {
        id: 7,
        question: "¿Cuál de estas cosas es un 'activo' (algo que puede poner dinero en tu bolsillo)?",
        options: ["La letra del coche", "Unas acciones de una empresa que te dan dividendos", "La factura del teléfono", "Una cena cara"],
        correctAnswerIndex: 1,
        explanation: "Un activo es algo que tiene valor y puede generar más dinero, como acciones o una casa que alquilas. En cambio, un 'pasivo' (como una deuda) saca dinero de tu bolsillo.",
        difficulty: 'simple',
    },
    {
        id: 10,
        question: "¿Qué significa 'diversificar' tus inversiones?",
        options: ["Poner todo tu dinero en la empresa que está más de moda", "Repartir tu dinero en muchos sitios diferentes (distintas empresas, países, etc.) para que el riesgo sea menor", "Guardar tu dinero en varias huchas", "Invertir solo en oro"],
        correctAnswerIndex: 1,
        explanation: "Es el famoso 'no poner todos los huevos en la misma cesta'. Si inviertes en muchos sitios y a uno le va mal, los otros pueden compensarlo. Reduce el riesgo de grandes sustos.",
        difficulty: 'simple',
    },
    {
        id: 12,
        question: "Si tienes hijos o personas que dependen de ti, ¿cuál de estos seguros es más importante tener?",
        options: ["El seguro del móvil por si se rompe la pantalla", "Un seguro de vida", "Un seguro de cancelación de viajes", "La garantía extendida de la tele"],
        correctAnswerIndex: 1,
        explanation: "Un seguro de vida garantiza que, si te pasa algo, tus seres queridos recibirán un dinero que les ayudará a mantenerse. Es una pieza fundamental para proteger a tu familia.",
        difficulty: 'simple',
    },
    {
        id: 5,
        situation: "Ana recibe 5.000€. No tiene deudas y su fondo de emergencia está completo. Un amigo le recomienda invertir todo en 'CriptoCohete', una nueva criptomoneda.",
        question: "¿Qué estrategia de inversión sería más prudente para Ana?",
        options: ["Invertir los 5.000€ en CriptoCohete, ¡a por todas!", "Invertir un poquito por si suena la flauta, pero la mayor parte en algo más seguro", "Buscar un fondo de inversión bien diversificado (una 'cesta' con muchas empresas) y de bajo coste", "Guardar el dinero en el banco sin invertirlo"],
        correctAnswerIndex: 2,
        explanation: "Apostar todo a una sola carta es muy arriesgado. La estrategia más inteligente a largo plazo es diversificar. Un fondo reparte tu dinero en cientos de sitios, reduciendo drásticamente el riesgo de perderlo todo.",
        difficulty: 'compleja',
    },
    {
        id: 8,
        situation: "Te quedan 30 años para jubilarte.",
        question: "¿Qué estrategia de ahorro para la jubilación suele ser más efectiva a tan largo plazo?",
        options: ["Guardar el dinero en una cuenta de ahorros que da un 1% de interés", "Invertir la mayor parte en activos con más potencial de crecimiento, como acciones o fondos de acciones, asumiendo que habrá subidas y bajadas en el camino", "Comprar oro y guardarlo en casa", "Dejarlo debajo del colchón"],
        correctAnswerIndex: 1,
        explanation: "A muy largo plazo, tienes tiempo para recuperarte de las crisis del mercado. Por eso, se suele recomendar asumir un poco más de riesgo con las acciones, que históricamente han dado un crecimiento mucho mayor que la inflación o las cuentas de ahorro.",
        difficulty: 'compleja',
    },
     {
        id: 9,
        situation: "El Fondo A te cobra una comisión del 2% al año y el Fondo B te cobra un 0.5%. Ambos tienen un rendimiento parecido.",
        question: "¿Importa mucho esa diferencia en las comisiones?",
        options: ["No, es una diferencia muy pequeña", "Sí, pero solo si inviertes millones de euros", "Sí, es importantísima. A largo plazo, esa pequeña diferencia puede 'comerse' una parte enorme de tus ganancias", "No, las comisiones solo se pagan si ganas dinero"],
        correctAnswerIndex: 2,
        explanation: "Las comisiones son como un pequeño agujero en tu hucha. Aunque parezcan insignificantes, año tras año, van sacando dinero que podría estar creciendo para ti. A largo plazo, unas comisiones bajas pueden suponer miles de euros más en tu bolsillo.",
        difficulty: 'compleja',
    },
    {
        id: 11,
        situation: "Vendes unas acciones y ganas 500€.",
        question: "¿Qué pasa con esa ganancia?",
        options: ["Es dinero limpio, todo para ti", "Es muy probable que tengas que declarar esa ganancia y pagar un impuesto por ella a Hacienda", "Tu banco o bróker se encarga de pagar los impuestos por ti", "Solo pagas impuestos si la ganancia es mayor que tu sueldo"],
        correctAnswerIndex: 1,
        explanation: "Las ganancias del capital (como vender acciones más caras de lo que las compraste) suelen tributar. Es fundamental informarse para guardar una parte de la ganancia para pagar los impuestos correspondientes y evitar sorpresas.",
        difficulty: 'compleja',
    },
     {
        id: 16,
        situation: "Te compras un portátil de 800€ y el vendedor te ofrece una garantía extendida de 3 años por 150€ extra.",
        question: "Desde un punto de vista puramente financiero, ¿qué es lo más recomendable?",
        options: ["Comprarla siempre, la tranquilidad no tiene precio", "Rechazarla. Es mejor guardar esos 150€ en tu fondo de emergencia por si el portátil se estropea en el futuro", "Intentar negociar el precio de la garantía", "Comprar la garantía y no tener fondo de emergencia"],
        correctAnswerIndex: 1,
        explanation: "Las garantías extendidas suelen ser un mal negocio. Estadísticamente, es poco probable que las uses, y su precio es alto. Es más eficiente 'auto-asegurarte' teniendo un fondo de emergencia para cubrir estas posibles reparaciones.",
        difficulty: 'compleja',
    },
    {
        id: 13,
        situation: "Te ofrecen dos trabajos. El Empleo A paga 30.000€ brutos al año. El Empleo B paga 28.000€ brutos, pero la empresa aporta un 5% de tu sueldo (1.400€) a tu plan de pensiones.",
        question: "Pensando a largo plazo, ¿cuál es probablemente la mejor oferta?",
        options: ["Empleo A, porque el sueldo es mayor", "Empleo B, porque esos 1.400€ 'gratis' invertidos cada año pueden convertirse en una fortuna para tu jubilación", "Son exactamente iguales", "Ninguno, debería seguir buscando"],
        correctAnswerIndex: 1,
        explanation: "Esa aportación de la empresa es como un aumento de sueldo oculto que se invierte directamente para tu futuro. Gracias al interés compuesto, a largo plazo, el valor de ese plan de pensiones probablemente superará con creces la diferencia salarial inicial.",
        difficulty: 'compleja',
    },
     {
        id: 17,
        situation: "Tu nómina dice 'Salario Bruto: 2.000€' pero en tu cuenta bancaria solo ingresan 1.600€.",
        question: "¿Dónde han ido los 400€ que faltan?",
        options: ["Es un error del banco", "La empresa se los ha quedado", "Son retenciones de impuestos (IRPF) y cotizaciones a la Seguridad Social que se pagan al Estado", "Es un adelanto para el mes que viene"],
        correctAnswerIndex: 2,
        explanation: "El salario bruto es el total antes de impuestos. La empresa retiene una parte para pagar en tu nombre el IRPF (impuesto sobre la renta) y tus aportaciones a la Seguridad Social (que financia tu futura pensión, el paro, etc.). Lo que recibes es el salario neto.",
        difficulty: 'compleja',
    },
    {
        id: 14,
        question: "¿Qué es un 'fondo indexado'?",
        options: ["Un fondo secreto para millonarios", "Una cuenta de ahorros que te garantiza no perder nunca", "Una forma de invertir barata y diversificada que simplemente 'copia' a un mercado entero (por ejemplo, a las 500 empresas más grandes de EE.UU.)", "Un tipo de préstamo"],
        correctAnswerIndex: 2,
        explanation: "Un fondo indexado es una de las herramientas de inversión más recomendadas para principiantes. En lugar de intentar ser más listo que el mercado, lo imita, lo que te da una gran diversificación (muchos huevos en muchas cestas) y comisiones muy, muy bajas.",
        difficulty: 'compleja',
    }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { id: 'first_income', title: '¡Primeros Ingresos!', description: 'Has añadido tu primer ingreso. ¡El viaje ha comenzado!', icon: CashIcon },
  { id: 'first_expense', title: 'Gasto Registrado', description: 'Has registrado tu primer gasto. ¡Saber a dónde va el dinero es clave!', icon: ShoppingCartIcon },
  { id: 'first_savings', title: 'Pequeño Ahorrador', description: 'Has movido dinero a tu cuenta de ahorro por primera vez.', icon: PiggyBankIcon },
  { id: 'first_investment', title: 'Inversor Novato', description: '¡Felicidades! Has hecho tu primera transferencia a inversión.', icon: PlantIcon },
  { id: 'positive_balance', title: 'Mes en Verde', description: 'Has terminado un mes (simulado) con más ingresos que gastos.', icon: ChartBarIcon },
  { id: 'big_saver', title: 'Hucha Llena', description: 'Has acumulado más de 1.000€ en tu cuenta de ahorro.', icon: TrophyIcon },
];