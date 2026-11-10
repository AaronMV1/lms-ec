export interface Course {
    id: string;
    title: string;
    banner: string;
    description: string;
    summary: string;
    instructor: string;
    category: string;
    duration: string;
    lessons: number;
    rating: number;
    price: string;
    discount?: string;
    students: number;
    highlight: string;
    outcomes: string[];
}


export const courses: Course[] = [

    {
        id: '1',
        title: 'Liderazgo y Productividad',
        banner: '/images/cursos/lidrezgo.png',
        description: 'Desarrolla habilidades blandas clave para liderar equipos y ejecutar proyectos académicos con excelencia.',
        summary: 'Aprende a liderar equipos, gestionar tu tiempo y alcanzar tus metas con herramientas prácticas que puedes aplicar desde el primer día.',
        instructor: 'Carlos Vega',
        category: 'Desarrollo Personal',
        duration: '5 horas',
        lessons: 18,
        rating: 4.8,
        price: 'S/ 109.00',
        discount: 'S/ 129.00',
        students: 620,
        highlight: 'Trending',
        outcomes: [
            'Liderar equipos con comunicación efectiva',
            'Gestionar tu tiempo y priorizar tareas',
            'Establecer metas medibles y darles seguimiento',
        ],
    },
    {
        id: '2',
        title: 'Marketing Digital Universitario',
        banner: '/images/cursos/marketing.png',
        description: 'Estrategias enfocadas en posicionar tu proyecto académico y profesional en redes y entornos digitales.',
        summary: 'Aprende las estrategias clave para posicionar tu proyecto académico y profesional en redes y entornos digitales.',
        instructor: 'Ana Morales',
        category: 'Negocios',
        duration: '8 horas',
        lessons: 24,
        rating: 4.9,
        price: 'S/ 129.00',
        students: 780,
        highlight: 'Más popular',
        outcomes: [
            'Diseñar campañas que conecten con tu audiencia universitaria',
            'Crear un plan de contenido efectivo',
            'Medir resultados con herramientas reales',
        ],
    },
    {
        id: '3',
        title: 'Desarrollo Web con Angular',
        banner: '/images/cursos/angular.png',
        description: 'Construye aplicaciones modernas y responsivas con el framework Angular y mejores prácticas de desarrollo.',
        summary: 'Construye aplicaciones modernas y responsivas con Angular, integrando componentes, rutas y servicios.',
        instructor: 'José Paredes',
        category: 'Tecnologías',
        duration: '12 horas',
        lessons: 30,
        rating: 4.8,
        price: 'S/ 169.00',
        students: 940,
        highlight: 'Nuevo',
        outcomes: [
            'Configurar proyectos e interfaces avanzadas',
            'Navegar entre componentes con Angular Router',
            'Consumir APIs y gestionar datos de usuario',
        ],
    },
    {
        id: '4',
        title: 'Diseño UX para EduTech',
        banner: '/images/cursos/disenio.png',
        description: 'Crea experiencias de aprendizaje intuitivas y accesibles para estudiantes y docentes.',
        summary: 'Descubre cómo crear experiencias de aprendizaje intuitivas y atractivas para estudiantes y docentes.',
        instructor: 'Paulina Torres',
        category: 'Diseño',
        duration: '6 horas',
        lessons: 20,
        rating: 4.7,
        price: 'S/ 119.00',
        students: 520,
        highlight: 'Recomendado',
        outcomes: [
            'Implementar flujos de usuario claros',
            'Aplicar principios de accesibilidad',
            'Diseñar prototipos rápidos y efectivos',
        ],
    },

];



export function getCourse(id: string) { return courses.find(course => course.id === id) }
