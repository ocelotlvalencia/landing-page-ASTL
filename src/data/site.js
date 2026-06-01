import {
  Boxes,
  DatabaseBackup,
  Download,
  Globe2,
  Headphones,
  Lightbulb,
  MonitorCog,
  RefreshCcw,
  Smartphone,
  Wrench
} from "@lucide/astro";

export const contactLinks = {
  whatsapp:
    "https://wa.me/522761112578?text=Hola%20ASTL%20Technology%20Consulting%2C%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20sobre%20un%20servicio%20tecnol%C3%B3gico%20para%20mi%20negocio.",
  email: "mailto:astlteccons@gmail.com",
  facebook: "https://www.facebook.com/share/1CHP3t4P3j/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/astlteccons?igsh=ZzA4OTBqZjRvaG1z"
};

export const services = [
  {
    icon: MonitorCog,
    title: "Soluciones para operación",
    text: "Implementamos herramientas digitales para ventas, control interno, inventarios y tareas clave del negocio."
  },
  {
    icon: Globe2,
    title: "Presencia digital",
    text: "Desarrollamos páginas web y recursos digitales para presentar tu negocio de forma clara y profesional."
  },
  {
    icon: Wrench,
    title: "Mantenimiento y optimización",
    text: "Mejoramos el rendimiento de equipos, corregimos fallas comunes y dejamos tu entorno de trabajo más estable."
  },
  {
    icon: Headphones,
    title: "Soporte técnico",
    text: "Atendemos dudas, configuraciones e incidencias técnicas de forma remota o según la necesidad del proyecto."
  },
  {
    icon: DatabaseBackup,
    title: "Protección de información",
    text: "Ayudamos a organizar respaldos, archivos y prácticas básicas para reducir riesgos de pérdida de datos."
  },
  {
    icon: RefreshCcw,
    title: "Configuración de equipos",
    text: "Preparamos computadoras, sistemas y herramientas para que puedan usarse de forma ordenada y eficiente."
  },
  {
    icon: Download,
    title: "Herramientas de trabajo",
    text: "Instalamos y ajustamos software necesario para ventas, administración, comunicación y productividad."
  },
  {
    icon: Boxes,
    title: "Digitalización de procesos",
    text: "Transformamos controles manuales en registros digitales más fáciles de consultar, medir y mantener."
  },
  {
    icon: Smartphone,
    title: "Aplicaciones a la medida",
    text: "Creamos soluciones sencillas para registrar información, automatizar tareas o resolver necesidades específicas."
  },
  {
    icon: Lightbulb,
    title: "Consultoría tecnológica",
    text: "Te acompañamos para elegir, ordenar y aprovechar mejor la tecnología de acuerdo con tu etapa de crecimiento."
  }
];

export const serviceCategories = [
  {
    icon: MonitorCog,
    title: "Operación del negocio",
    summary: "Herramientas para vender, controlar inventario y ordenar procesos internos.",
    items: ["Punto de venta", "Inventarios digitales", "Digitalización de procesos"]
  },
  {
    icon: Globe2,
    title: "Presencia y herramientas digitales",
    summary: "Soluciones para mostrar tu negocio en línea y crear herramientas sencillas.",
    items: ["Página web", "Apps sencillas para negocios", "Herramientas de trabajo"]
  },
  {
    icon: Wrench,
    title: "Soporte y mantenimiento",
    summary: "Atención técnica para mantener equipos estables, configurados y listos.",
    items: ["Mantenimiento de computadoras", "Soporte técnico remoto", "Formateo y optimización", "Instalación de software"]
  },
  {
    icon: DatabaseBackup,
    title: "Seguridad y asesoría",
    summary: "Acompañamiento para cuidar información y tomar mejores decisiones tecnológicas.",
    items: ["Respaldos de información", "Asesoría tecnológica"]
  }
];

export const metrics = [
  ["10", "líneas de servicio tecnológico"],
  ["24/7", "mentalidad de soporte y continuidad"],
  ["100%", "enfoque práctico para tu operación diaria"]
];

export const terminalLines = [
  "const servicio = crearSolucion('negocio');",
  "servicio.modulos.add(['ventas', 'web', 'respaldos']);",
  "await astl.configurarInfraestructura(cliente);",
  "await astl.probarFlujoOperacion();",
  "deploy.status = 'servicio_listo';"
];

export const businessTypes = [
  ["Tiendas y comercios", "Punto de venta, inventario, respaldos y equipos listos para atender mejor."],
  ["Oficinas y consultorios", "Soporte, mantenimiento, herramientas digitales y organización de información."],
  ["Emprendimientos", "Página web, presencia digital y asesoría para elegir tecnología sin gastar de más."],
  ["Negocios en crecimiento", "Apps sencillas, procesos digitales y acompañamiento para escalar con orden."]
];

export const packages = [
  {
    name: "Start",
    label: "setup básico",
    description: "Para negocios que necesitan ordenar lo básico: revisar equipos, resolver dudas técnicas y definir una ruta antes de invertir.",
    items: ["Asesoría inicial", "Revisión de equipos", "Configuración esencial", "Ruta tecnológica", "Recomendaciones de mejora"]
  },
  {
    name: "Business",
    label: "operación digital",
    description: "Para negocios que quieren trabajar mejor con herramientas digitales, presencia web, respaldos y soporte técnico.",
    items: ["Página web", "Soporte técnico", "Respaldos", "Inventarios o punto de venta", "Acompañamiento de implementación"]
  },
  {
    name: "Custom",
    label: "a la medida",
    description: "Para necesidades específicas: sistemas sencillos, apps internas, automatización o una solución ajustada al flujo real del negocio.",
    items: ["App sencilla", "Automatización", "Integración de procesos", "Acompañamiento técnico", "Solución personalizada"]
  }
];

export const projects = [
  ["case_01", "Punto de venta a la medida para paletería", "Sistema desarrollado para apoyar la operación de venta, registro y control del negocio."],
  ["case_02", "Página web para paletería", "Sitio web creado para presentar el negocio, sus productos y sus canales de contacto."]
];

export const processSteps = [
  "Escuchamos cómo trabaja tu negocio y detectamos qué puede resolverse con tecnología.",
  "Proponemos una solución sencilla, viable y alineada a tu presupuesto.",
  "Instalamos, configuramos o desarrollamos la herramienta y te acompañamos en el uso."
];

export const faqs = [
  ["¿Atienden de forma remota?", "Sí. Muchos servicios pueden resolverse por soporte remoto; si el caso lo requiere, se acuerda una visita o instalación específica."],
  ["¿Pueden hacer un punto de venta a la medida?", "Sí. Se revisa cómo opera el negocio y se propone una solución sencilla, útil y alineada a tus procesos."],
  ["¿También dan mantenimiento a equipos?", "Sí. Se puede revisar rendimiento, errores comunes, instalación de software, formateo y optimización."],
  ["¿Tienen oficina física?", "Por el momento la atención es en línea y presencial según el servicio, pero sin ubicación de oficina abierta al público."],
  ["¿Cuál es el horario de atención?", "El horario de atención es de lunes a sábado, de 9:00 a 5:30."],
  ["¿La página ya puede publicarse en Vercel?", "Sí. El proyecto está creado en Astro y se puede preparar para subirlo a Vercel cuando tengas repositorio o cuenta lista."]
];
