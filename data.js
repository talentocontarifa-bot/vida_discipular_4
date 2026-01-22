// --- DATOS DEL LIBRO (SEMANAS 1-6 + RECURSOS) ---
const bookData = {
    weeks: [
        {
            id: "w1",
            title: "Semana 1: Cómo enderezar relaciones torcidas",
            verse: "Mateo 5.23-24: Por tanto, si traes tu ofrenda al altar, y allí te acuerdas de que tu hermano tiene algo contra ti...",
            days: [
                {
                    id: "w1intro", title: "Introducción Semana 1: Metas y Disciplinas",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Evaluar sus relaciones con otras personas y procurar la reconciliación cuando sea necesario." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w1_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO (Devocional Diario):", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Lea su Biblia diariamente. Memorice Mateo 5.23-24." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore con su compañero de oración." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Llene el formulario 'Índice de relaciones'." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Visite a un vecino." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Complete la autoevaluación." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>Por tanto, si traes tu ofrenda al altar, y allí te acuerdas de que tu hermano tiene algo contra ti, deja allí tu ofrenda delante del altar, y anda, reconcíliate primero con tu hermano, y entonces ven y presenta tu ofrenda (Mateo 5.23-24).</div>" }
                    ]
                },
                {
                    id: "w1d1", title: "Día 1: Importancia de las relaciones",
                    content: [
                        { type: "text", text: "Su líder le presentó el Maestro Constructor en la primera sesión del grupo. Este plan describe el camino del discipulado y el crecimiento espiritual. El Maestro Constructor ilustra cómo las relaciones son de vital importancia para predicar el evangelio y llevar a cabo la misión de Cristo. ¿Cuál es nuestra misión como discípulos de Cristo?" },
                        { type: "list", items: ["Glorificar a Dios siendo un discípulo obediente al Señor Jesucristo durante toda la vida", "Glorificar a Dios haciendo discípulos en todas las naciones", "Sumarse a la misión de Dios para: glorificar su nombre; exaltar a Cristo como el Señor; reconciliar al mundo con Él; establecer su reino."] },
                        { type: "text", text: "Fortalecer las relaciones personales es esencial para predicar el evangelio y hacer discípulos en todas las naciones. Las relaciones inadecuadas levantan barreras para testificar." },
                        { type: "header", text: "El Centro de Su Experiencia" },
                        { type: "text", text: "La comunión entre los creyentes es el centro de su experiencia cristiana. Su relación con Dios, por medio de Cristo, lo une a usted con otros creyentes formando así el cuerpo de Cristo." },
                        { type: "text", text: "<div class='verse-box'><strong>1 Juan 3.14 (NVI):</strong> Nosotros sabemos que hemos pasado de la muerte a la vida porque amamos a nuestros hermanos. El que no ama permanece en la muerte.</div>" },
                        { type: "question", id: "w1d1q1", prompt: "Lea 1 Juan 3.14. ¿Cómo sabemos que hemos pasado de muerte a vida?", placeholder: "Escriba su respuesta aquí..." },
                        { type: "text", text: "El amor de los unos por los otros es la manera de demostrar que hemos pasado de la muerte espiritual a la vida eterna en Cristo. Sin embargo, el pecado aún se interpone en la comunión de unos con otros." },
                        { type: "checklist", id: "w1d1c1", prompt: "Subraye (marque) las causas de los problemas entre usted y los demás:", options: ["Celos", "Codicia", "Amargura", "Orgullo", "Insensibilidad", "Impaciencia", "Ira", "Chisme", "Falta de tacto", "Malentendidos", "Vanagloria", "Avaricia"] },
                        { type: "text", text: "Las diferencias de opiniones, conflictos de personalidades y luchas por el poder también dañan las relaciones personales. Lea Mateo 20.20-24." },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 20.20-24 (NVI):</strong> Entonces la madre de los hijos de Zebedeo se acercó a Jesús con sus hijos y, arrodillándose, le hizo una petición... Jesús les dijo: —Ciertamente beberán de mi trago amargo, pero el sentarse a mi derecha o a mi izquierda no me corresponde a mí concederlo... Cuando los otros diez discípulos oyeron esto, se indignaron contra los dos hermanos.</div>" },
                        { type: "question", id: "w1d1q2", prompt: "¿Con quién estaban enfadados los discípulos? ¿Por qué?", placeholder: "Responda aquí..." },
                        { type: "text", text: "Nuestra relación con Cristo hace posible que restauremos las relaciones personales. Por medio del perdón podemos reconciliarnos con Dios y con los demás. Lea 1 Juan 1.7." },
                        { type: "text", text: "<div class='verse-box'><strong>1 Juan 1.7 (NVI):</strong> Pero si vivimos en la luz, así como él está en la luz, tenemos comunión unos con otros y la sangre de su Hijo Jesucristo nos limpia de todo pecado.</div>" },
                        { type: "question", id: "w1d1q3", prompt: "¿Cuál es la base de la comunión entre los creyentes? ¿Qué limpia esa comunión?", placeholder: "Responda aquí..." },
                        { type: "header", text: "GUÍA DIARIA (1 Juan 3.11-24)" },
                        { type: "question", id: "w1d1g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w1d1g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w1d2", title: "Día 2: Lo que Cristo manda",
                    content: [
                        { type: "text", text: "Como aprendió el día 1, los creyentes no son inmunes a los problemas interpersonales. Sin embargo, cuando sepa que hay un problema interpersonal, corríjalo inmediatamente." },
                        { type: "header", text: "Su Relación con Dios" },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 6.14-15 (NVI):</strong> Mencionan que si perdonan a otros sus ofensas, también los perdonará su Padre celestial; pero si no perdonan, tampoco su Padre perdonará sus ofensas.<br><br><strong>1 Juan 4.20-21 (NVI):</strong> Si alguien afirma: «Yo amo a Dios», pero odia a su hermano, es un mentiroso... Y él nos ha dado este mandamiento: el que ama a Dios, ame también a su hermano.</div>" },
                        { type: "question", id: "w1d2q1", prompt: "Lea Mateo 6.14-15 y 1 Juan 4.20-21. Resúmalos con sus propias palabras:", placeholder: "Escriba su resumen..." },
                        { type: "text", text: "De acuerdo a Mateo 6.14-15 el pecado destruye las relaciones humanas. Si usted no perdona a los demás cuando lo agravian, ¿cómo puede esperar que Dios lo perdone?" },
                        { type: "header", text: "El Mandamiento de Cristo" },
                        { type: "question", id: "w1d2q2", prompt: "Trate de escribir de memoria Mateo 5.23-24:", placeholder: "Escriba el versículo..." },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 18.21-22 (NVI):</strong> Pedro se acercó a Jesús y le pregunto: —Señor, ¿cuántas veces tengo que perdonar a mi hermano que peca contra mí? ¿Hasta siete veces? —No te digo que hasta siete veces, sino hasta setenta veces siete —le contestó Jesús.<br><br><strong>Juan 13.34-35 (NVI):</strong> Este mandamiento nuevo les doy: que se amen los unos a los otros. Así como yo los he amado... De este modo todos sabrán que son mis discípulos.</div>" },
                        { type: "checklist", id: "w1d2c1", prompt: "Lea Mateo 18.21-22 y Juan 13.34-35. Marque Verdadero o Falso para las siguientes declaraciones:", options: ["Según Mateo 5.23-24, usted debe restaurar las relaciones sólo si la otra persona lo ha agraviado a usted.", "Según Mateo 18.21-22, usted debe perdonar 490 veces.", "Según Juan 13.34-35, no se espera que usted ame a los demás tal como Cristo lo amó a usted."] },
                        { type: "header", text: "GUÍA DIARIA (Mateo 5.21-48)" },
                        { type: "question", id: "w1d2g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w1d2g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w1d3", title: "Día 3: Cómo dar los primeros pasos",
                    content: [
                        { type: "text", text: "El perdón es una decisión deliberada de la voluntad. Aunque la otra persona nunca le pida perdón, usted puede anticiparse y decidir perdonar." },
                        { type: "header", text: "El Peligro del Resentimiento" },
                        { type: "text", text: "<div class='verse-box'><strong>Hebreos 12.15 (NVI):</strong> Asegúrense de que nadie deje de alcanzar la gracia de Dios; de que ninguna raíz amarga brote y cause dificultades y corrompa a muchos.</div>" },
                        { type: "checklist", id: "w1d3c1", prompt: "Lea Hebreos 12.15 y marque los peligros que se especifican:", options: ["La persona puede olvidar", "No perdonar a dicha persona", "Raíz de amargura que contamina"] },
                        { type: "question", id: "w1d3q1", prompt: "¿Cuál es la mejor forma de abordar el problema? (Escriba su frase de apertura ideal)", placeholder: "Ej: Siento mucho que..." },
                        { type: "text", text: "Pasos para la reconciliación: 1. Reconcíliese en privado. 2. Confiese sus faltas. 3. Pregunte si ha ofendido." },
                        { type: "header", text: "GUÍA DIARIA (Mateo 18.21-35)" },
                        { type: "question", id: "w1d3g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w1d3g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w1d4", title: "Día 4: Reparar daños",
                    content: [
                        { type: "text", text: "Después de pedir perdón, se necesita restituir (Zaqueo, Lucas 19.8)." },
                        { type: "checklist", id: "w1d4c1", prompt: "¿Qué constituye restitución adecuada?", options: ["Decir 'lo siento'", "Retractarse públicamente", "Devolver lo robado", "Reparar el daño material"] },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 18.15-17 (NVI):</strong> Si tu hermano peca contra ti, ve a solas con él y hazle ver su falta. Si te hace caso, has ganado a tu hermano. Pero si no, lleva contigo a uno o dos más... Si se niega a hacerles caso a ellos, díselo a la iglesia.</div>" },
                        { type: "question", id: "w1d4q1", prompt: "Lea Mateo 18.15-17. Si un hermano peca contra ti, ¿cuál es el primer paso?", placeholder: "Respuesta..." },
                        { type: "header", text: "GUÍA DIARIA (1 Juan 4.7-21)" },
                        { type: "question", id: "w1d4g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w1d4g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w1d5", title: "Día 5: Vivir en paz",
                    content: [
                        { type: "text", text: "La oración es el medio espiritual que proporciona la solución a los conflictos." },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 5.23-24 (NVI):</strong> Por lo tanto, si estás presentando tu ofrenda en el altar y allí recuerdas que tu hermano tiene algo contra ti, deja tu ofrenda allí delante del altar. Ve primero y reconcíliate con tu hermano; luego vuelve y presenta tu ofrenda.</div>" },
                        { type: "question", id: "w1d5q1", prompt: "Según Mateo 5.23-24, ¿dónde termina un creyente el proceso de reconciliación?", placeholder: "Respuesta..." },
                        { type: "header", text: "Hoja de Evaluación Personal" },
                        { type: "question", id: "w1d5q2", prompt: "Identifique su etapa actual en el Maestro Constructor:", placeholder: "Muerto, Niño, Discípulo, Discipulador, Colaborador..." }
                    ]
                }
            ]
        },
        {
            id: "w2",
            title: "Semana 2: Las relaciones: Un medio para testificar y discipular",
            verse: "Romanos 6.23: Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna...",
            days: [
                {
                    id: "w2intro", title: "Introducción Semana 2: Testificar y Discipular",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Podrá testificar de su fe, asumir su tarea de discipular a otros y usar la oración como recurso para ministrar a otros." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w2_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO:", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Lea su Biblia. Memorice Romanos 6.23. Repase Mateo 5.23-24." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore por ministerios de evangelismo y por sus vecinos." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Use el formulario 'Cociente de relaciones' con un familiar." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Escriba nombres de inconversos. Visite vecinos." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Aprenda características de una persona incrédula." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro (Romanos 6.23).</div>" }
                    ]
                },
                {
                    id: "w2d1", title: "Día 1: Las relaciones son el todo",
                    content: [
                        { type: "header", text: "Historia del Boxeador" },
                        { type: "text", text: "En un avión, oré para sentarme junto a alguien en quien Dios obrara. Me senté junto a un boxeador. Al final del vuelo, oró para recibir a Cristo." },
                        { type: "header", text: "La Relación Modelo" },
                        { type: "text", text: "<div class='verse-box'><strong>Juan 17.1 (NVI):</strong> Después de que Jesús dijo esto, dirigió la mirada al cielo y oró así: «Padre, ha llegado la hora. Glorifica a tu Hijo, para que tu Hijo te glorifique a ti».</div>" },
                        { type: "question", id: "w2d1q1", prompt: "Lea Juan 17.1. ¿Cuál era el propósito de Jesús?", placeholder: "Respuesta..." },
                        { type: "checklist", id: "w2d1c1", prompt: "¿Cómo puede glorificar al Padre?", options: ["Tiempo devocional", "Prioridades financieras", "Actividades sanas"] },
                        { type: "question", id: "w2d1q2", prompt: "¿A quién le ha encomendado Dios para discipular?", placeholder: "Nombres..." },
                        { type: "header", text: "GUÍA DIARIA (Juan 17)" },
                        { type: "question", id: "w2d1g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w2d1g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w2d2", title: "Día 2: Enseñanzas de la obediencia",
                    content: [
                        { type: "text", text: "Juan 17.6-7: Jesús reveló al Padre, enseñó que el Padre es la fuente y enseñó obediencia." },
                        { type: "question", id: "w2d2q1", prompt: "¿Cómo puede revelar a Dios a sus discípulos?", placeholder: "Ideas..." },
                        { type: "question", id: "w2d2q2", prompt: "Según Juan 17.6, ¿qué identifica a los verdaderos discípulos?", placeholder: "Respuesta..." },
                        { type: "header", text: "GUÍA DIARIA (Lucas 19.28-35)" },
                        { type: "question", id: "w2d2g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w2d2g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w2d3", title: "Día 3: Salvación: Clave de la relación",
                    content: [
                        { type: "text", text: "La vida eterna es conocer a Dios (Juan 17.3). La persona sin Cristo está 'muerta' espiritualmente." },
                        { type: "text", text: "<div class='verse-box'><strong>Efesios 2.12 (NVI):</strong> Recuerden que en ese entonces ustedes estaban separados de Cristo... sin esperanza y sin Dios en el mundo.<br><br><strong>Efesios 4.18 (NVI):</strong> A causa de la ignorancia que los domina y por la dureza de su corazón, estos tienen oscurecido el entendimiento y están alejados de la vida que proviene de Dios.</div>" },
                        { type: "question", id: "w2d3q1", prompt: "Escriba las características de una persona espiritualmente muerta (Ef 2.12, 4.18):", placeholder: "Características..." },
                        { type: "header", text: "Método para Testificar" },
                        { type: "text", text: "Use los 4 puntos: Familia, Intereses, Religión, Preguntas de Diagnóstico." },
                        { type: "question", id: "w2d3q2", prompt: "Escriba la primera pregunta de diagnóstico:", placeholder: "¿Está seguro de tener vida eterna...?" },
                        { type: "header", text: "GUÍA DIARIA (Romanos 6)" },
                        { type: "question", id: "w2d3g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w2d3g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w2d4", title: "Día 4: Orar por los discípulos",
                    content: [
                        { type: "text", text: "Jesús oró por sus discípulos, no por el mundo (en ese momento). Oró por protección, santificación y unidad." },
                        { type: "question", id: "w2d4q1", prompt: "¿Cómo puede proteger del maligno a quienes discipula?", placeholder: "Estrategias..." },
                        { type: "checklist", id: "w2d4c1", prompt: "Grados de receptividad (El Sembrador):", options: ["Buena tierra", "Pedregosa", "Espinos", "Dura"] },
                        { type: "header", text: "GUÍA DIARIA (Juan 16)" },
                        { type: "question", id: "w2d4g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w2d4g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w2d5", title: "Día 5: La orden es testificar",
                    content: [
                        { type: "text", text: "Los campos están blancos para la cosecha. Jesús nos eligió para llevar fruto." },
                        { type: "text", text: "<div class='verse-box'><strong>1 Timoteo 2.3-4 (NVI):</strong> Esto es bueno y agradable a Dios nuestro Salvador, pues él quiere que todos sean salvos y lleguen a conocer la verdad.</div>" },
                        { type: "question", id: "w2d5q1", prompt: "Lea 1 Timoteo 2.3-4. ¿Cuál es la voluntad de Dios?", placeholder: "Respuesta..." },
                        { type: "question", id: "w2d5q2", prompt: "Escriba nombres de personas a quienes ha testificado:", placeholder: "Nombres y reacciones..." },
                        { type: "header", text: "GUÍA DIARIA (Juan 4.31-38)" },
                        { type: "question", id: "w2d5g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w2d5g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                }
            ]
        },
        {
            id: "w3",
            title: "Semana 3: Instruir a los niños espirituales",
            verse: "1 Pedro 2.2-3: Desead, como niños recién nacidos, la leche espiritual no adulterada...",
            days: [
                {
                    id: "w3intro", title: "Introducción Semana 3: Instruir a los Niños Espirituales",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Usted podrá discipular a los nuevos creyentes." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w3_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO:", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Lea su Biblia. Memorice 1 Pedro 2.2-3. Repase Mateo 5.23-24 y Romanos 6.23." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore con su compañero y por sus vecinos." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Reconcíliese. Anime a un creyente nuevo." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Aprenda 'El evangelio en la mano'. Visite a una persona inconversa." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Aprenda características de un niño espiritual." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>Desead, como niños recién nacidos, la leche espiritual no adulterada, para que por ella crezcáis para salvación, si es que habéis gustado la benignidad del Señor (1 Pedro 2.2-3).</div>" }
                    ]
                },
                {
                    id: "w3d1", title: "Día 1: Seguimiento",
                    content: [
                        { type: "header", text: "Historia: Joe Case" },
                        { type: "text", text: "Cuando vivía en Nashville, hablaba con mi entrenador, Joe Case... Para mí fue un privilegio observar a Joe... El seguimiento fue sencillo porque nos veíamos regularmente." },
                        { type: "header", text: "Cuidar al Nuevo Creyente" },
                        { type: "text", text: "El seguimiento significa cuidar al nuevo creyente... La Gran Comisión (Mateo 28.19-20) implica este cuidado." },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 28.19-20 (NVI):</strong> Por tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo, enseñándoles a obedecer todo lo que les he mandado a ustedes. Y les aseguro que estaré con ustedes siempre, hasta el fin del mundo.</div>" },
                        { type: "checklist", id: "w3d1c1", prompt: "Marque las oraciones verdaderas según Mateo 28.19-20:", options: ["Hacer discípulos es opcional.", "La persona es madura inmediatamente después de la conversión.", "El discipulador termina su tarea cuando el discípulo obedece lo que Cristo enseñó."] },
                        { type: "header", text: "Ofrezca Ayuda Inmediata" },
                        { type: "text", text: "<div class='verse-box'><strong>Hechos 9.15-19 (NVI):</strong> El Señor le dijo a Ananías: —Ve, porque ese hombre es mi instrumento escogido... Ananías fue y entró en la casa, le impuso las manos a Saulo... Al instante cayó de los ojos de Saulo algo como escamas, y recobró la vista.</div>" },
                        { type: "question", id: "w3d1q1", prompt: "Lea Hechos 9.15-19. ¿Qué hizo Ananías con respecto al seguimiento de Pablo?", placeholder: "Respuesta..." },
                        { type: "text", text: "<div class='verse-box'><strong>Hechos 9.26-28 (NVI):</strong> Cuando llegó a Jerusalén, Saulo trató de juntarse con los discípulos, pero todos le tenían miedo... Entonces Bernabé lo tomó y lo llevó a los apóstoles... Así que Saulo se movía con libertad por Jerusalén y predicaba valientemente.</div>" },
                        { type: "question", id: "w3d1q2", prompt: "Lea Hechos 9.26-28. ¿Qué hizo Bernabé para ayudar a Pablo a afirmarse?", placeholder: "Respuesta..." },
                        { type: "text", text: "Ayudar al nuevo creyente a afirmarse en el nuevo grupo de amigos es crucial. Bernabé respondió por Pablo cuando los demás dudaban." },
                        { type: "header", text: "Una Misión con el Maestro: El Niño Espiritual" },
                        { type: "text", text: "<div class='verse-box'><strong>1 Corintios 3.1 (NVI):</strong> ...no pude hablarles como a personas espirituales sino como a inmaduras, apenas niños en Cristo.<br><br><strong>Efesios 4.14 (NVI):</strong> Así ya no seremos niños, zarandeados por las olas y llevados de aquí para allá por todo viento de enseñanza...</div>" },
                        { type: "checklist", id: "w3d1c2", prompt: "Lea 1 Corintios 3.1 y Efesios 4.14. Marque las características de un niño espiritual:", options: ["Sigue la orientación del mundo", "Propenso a celos y disputas", "Está bien fortalecido en su fe", "Propenso a ser tentado", "Cree en falsas enseñanzas con facilidad", "No sabe discernir quién le puede hacer daño"] },
                        { type: "header", text: "GUÍA DIARIA (Hechos 9.19-31)" },
                        { type: "question", id: "w3d1g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w3d1g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w3d2", title: "Día 2: Animemos a otros",
                    content: [
                        { type: "text", text: "Bernabé fue conocido como el 'Hijo de Consolación'. En Hechos 11.22-24, cuando vio la gracia de Dios en Antioquía, se regocijó y exhortó a todos a permanecer fieles." },
                        { type: "text", text: "<div class='verse-box'><strong>Hechos 11.22-24 (NVI):</strong> Cuando él llegó y vio las evidencias de la gracia de Dios, se alegró y animó a todos a hacerse el firme propósito de permanecer fieles al Señor, pues era un hombre bueno, lleno del Espíritu Santo y de fe. Un gran número de personas aceptó al Señor.</div>" },
                        { type: "question", id: "w3d2q1", prompt: "¿Quién lo alentó a usted cuando recibió al Señor? ¿Qué hizo esa persona?", placeholder: "Nombre y acciones..." },
                        { type: "text", text: "Bernabé también acompañó a Pablo. En Hechos 13.43, vemos que les 'persuadían a que perseverasen en la gracia de Dios'." },
                        { type: "header", text: "Casos de Estudio: ¿Cómo ayudaría usted?" },
                        { type: "text", text: "Piense en las siguientes situaciones y cómo un creyente maduro podría ayudar." },
                        { type: "question", id: "w3d2q2", prompt: "Caso 1: Caridad rompió con su novio con quien vivía para seguir a Cristo. Se siente sola. ¿Qué haría usted?", placeholder: "Ideas de apoyo..." },
                        { type: "question", id: "w3d2q3", prompt: "Caso 2: Jorge luchaba contra la pornografía. Ahora viaja mucho y se siente tentado. ¿Cómo ayudarlo?", placeholder: "Ideas de apoyo..." },
                        { type: "question", id: "w3d2q4", prompt: "Caso 3: Felipe nunca había orado ni tenido Biblia. Se siente incómodo en la clase. ¿Qué haría?", placeholder: "Ideas de apoyo..." },
                        { type: "header", text: "GUÍA DIARIA (Hechos 13)" },
                        { type: "question", id: "w3d2g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w3d2g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w3d3", title: "Día 3: Instruir a los nuevos creyentes",
                    content: [
                        { type: "header", text: "El Ejemplo de Jesús con Pedro" },
                        { type: "text", text: "Jesús usó la calidad de la fe para alentar. Llamó a Simón 'Pedro' (roca) cuando aún no lo parecía. Lo reprendió cuando fue necesario (Mateo 16.22-23) y le dio una tarea (Juan 21.15: 'Apacienta mis corderos')." },
                        { type: "question", id: "w3d3q1", prompt: "Basándose en cómo Jesús trató a Pedro, enumere maneras de cuidar a un creyente nuevo:", placeholder: "Lista de acciones..." },
                        { type: "header", text: "Asuma la Responsabilidad" },
                        { type: "text", text: "Pablo usó metáforas familiares en 1 Tesalonicenses 2. Relacione los pasajes con la figura:" },
                        { type: "text", text: "<div class='verse-box'><strong>1 Tesalonicenses 2 (NVI) Resumen:</strong><br>v1-5: ...nunca hemos usado palabras aduladoras... (Trato sincero)<br>v6-7: ...los tratamos con delicadeza. Como una madre que amamanta a sus hijos...<br>v11-12: ...como un padre a sus propios hijos, los hemos animado, consolado y exhortado...</div>" },
                        { type: "list", items: ["1 Tes 2.1-5 -> Hermano (trato igualitario)", "1 Tes 2.6-7 -> Madre (cuidado tierno)", "1 Tes 2.11-12 -> Padre (exhortación y consuelo)"] },
                        { type: "text", text: "Un padre espiritual debe proteger, enseñar, ser ejemplo y trabajar hasta que el creyente madure." },
                        { type: "question", id: "w3d3q2", prompt: "En el Maestro Constructor, ¿cuál es la tarea del Discipulador con el Niño Espiritual?", placeholder: "Respuesta..." },
                        { type: "header", text: "GUÍA DIARIA (1 Tesalonicenses 2—3)" },
                        { type: "question", id: "w3d3g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w3d3g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w3d4", title: "Día 4: Ejemplos de seguimiento",
                    content: [
                        { type: "text", text: "La iglesia primitiva nos da pautas de seguimiento en Hechos 2.42-47." },
                        { type: "text", text: "<div class='verse-box'><strong>Hechos 2.42-47 (NVI):</strong> Se mantenían firmes en la enseñanza de los apóstoles, en la comunión, en el partimiento del pan y en la oración... Todos los creyentes estaban juntos y tenían todo en común... Y cada día el Señor añadía al grupo los que iban siendo salvos.</div>" },
                        { type: "question", id: "w3d4q1", prompt: "Lea Hechos 2.42-47. Subraye o escriba qué hacían los primeros cristianos:", placeholder: "Perseveraban en..." },
                        { type: "text", text: "También en Hechos 11.19-23, la iglesia de Jerusalén envió a Bernabé hasta Antioquía para cuidar a los nuevos creyentes. No los dejaron solos." },
                        { type: "header", text: "Preparación para Ministrar" },
                        { type: "text", text: "¿Cómo puede usar las disciplinas de la Cruz del Discípulo para instruir a un nuevo creyente?" },
                        { type: "question", id: "w3d4q2", prompt: "Vivir la Palabra:", placeholder: "Cómo explicarlo..." },
                        { type: "question", id: "w3d4q3", prompt: "Orar con fe:", placeholder: "Cómo explicarlo..." },
                        { type: "question", id: "w3d4q4", prompt: "Comunión y Testimonio:", placeholder: "Cómo explicarlo..." },
                        { type: "header", text: "GUÍA DIARIA (Hechos 11)" },
                        { type: "question", id: "w3d4g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w3d4g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w3d5", title: "Día 5: Cómo cuidar el seguimiento",
                    content: [
                        { type: "text", text: "Tal como un bebé necesita cuidados, un nuevo creyente necesita orientación. Aquí hay 5 disciplinas prácticas para el seguimiento:" },
                        { type: "text", text: "<div class='verse-box'><strong>Referencias NVI:</strong><br>2 Tim 2.2: Encomiéndalo a creyentes dignos de confianza.<br>Fil 4.9: Pónganlo por práctica.<br>Hechos 20.32: Ahora los encomiendo a Dios...<br>Juan 15.16: ...los he puesto para que vayan y produzcan fruto...</div>" },
                        {
                            type: "list", items: [
                                "1. EXPLÍQUELE POR QUÉ (2 Tim 2.2): Deben entender la importancia de lo que se les enseña.",
                                "2. MUÉSTRELE CÓMO (Fil 4.9): No solo diga 'ore', enséñele a orar. Use su ejemplo.",
                                "3. HAGA QUE LA PERSONA COMIENCE (Hechos 20.32): Ayúdela a pasar de la información a la acción.",
                                "4. MANTENGA A LA PERSONA EN SU TAREA (2 Pedro 1.12-15): Revise sus tareas, pida cuentas con amor.",
                                "5. AYUDE A LA PERSONA A REPRODUCIR SU FE (Juan 15.16): Enséñele a explicar a otros lo que aprendió."
                            ]
                        },
                        { type: "question", id: "w3d5q1", prompt: "Escriba las 5 disciplinas para hacer el seguimiento:", placeholder: "1... 2... 3... 4... 5..." },
                        { type: "header", text: "Misión con el Maestro" },
                        { type: "text", text: "La tarea del Maestro Constructor con un niño espiritual es INSTRUIRLO. Su meta es afirmar a dicha persona en la fe." },
                        { type: "question", id: "w3d5q2", prompt: "Escriba los nombres de los nuevos creyentes a quienes usted ayuda:", placeholder: "Nombres..." },
                        { type: "text", text: "En las semanas anteriores aprendió que es difícil discipular a alguien con quien no tiene una buena relación. Procure reconciliarse con quien sea difícil antes de intentar guiarlo." },
                        { type: "header", text: "GUÍA DIARIA (2 Pedro 1.5-9)" },
                        { type: "question", id: "w3d5g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w3d5g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                }
            ]
        },
        {
            id: "w4",
            title: "Semana 4: La madurez del discípulo",
            verse: "Lucas 6.40: El discípulo no es superior a su maestro; mas todo el que fuere perfeccionado, será como su maestro.",
            days: [
                {
                    id: "w4intro", title: "Introducción Semana 4: La Madurez del Discípulo",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Podrá bosquejar un proceso personal de crecimiento y comenzar a ayudar a otro creyente a crecer." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w4_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO:", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Lea su Biblia. Memorice Lucas 6.40. Repase Mateo 5, Romanos 6, 1 Pedro 2." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore por vocación de servicio." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Dedique tiempo a un familiar o amigo." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Explique 'El evangelio en la mano' a un inconverso." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Aprenda características del discípulo espiritual. Use el dinero para ministrar. Estudie mayordomía." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>El discípulo no es superior a su maestro; mas todo el que fuere perfeccionado, será como su maestro (Lucas 6.40).</div>" }
                    ]
                },
                {
                    id: "w4d1", title: "Día 1: Crezca hacia la madurez",
                    content: [
                        { type: "text", text: "Cuando Shirley y yo éramos novios... ¿Cómo mide usted su madurez? El propósito de Dios es que sea espiritualmente maduro." },
                        { type: "header", text: "La Provisión y el Plan de Dios" },
                        { type: "text", text: "<div class='verse-box'><strong>Colosenses 1.13-14 (NVI):</strong> Él nos libró del dominio de la oscuridad y nos trasladó al reino de su amado Hijo, en quien tenemos redención y perdón de pecados.<br><br><strong>Colosenses 1.21-22 (NVI):</strong> Pero ahora Dios... los ha reconciliado en el cuerpo mortal de Cristo mediante su muerte.</div>" },
                        { type: "text", text: "En Colosenses 1.21-2.8 Pablo revela el propósito de Dios. Lea Colosenses 1.13-14 y 21-22. Dios nos ha librado de la potestad de las tinieblas y nos ha trasladado al reino de su Hijo." },
                        { type: "checklist", id: "w4d1c1", prompt: "Relacione los versículos con los propósitos de Dios:", options: ["Col 1.22: Ser presentados santos y sin mancha", "Col 1.13: Ser trasladados al Reino", "Col 1.9: Ser llenos del conocimiento de su voluntad", "Col 1.10: Andar como es digno del Señor"] },
                        { type: "header", text: "Ilustraciones de Crecimiento" },
                        { type: "list", items: ["1. Crecimiento Humano (Niño -> Adulto)", "2. Crecimiento de Planta (Arraigados, Ef 3.17)", "3. Construcción de Edificio (Edificados en Él, 1 Cor 3.11)"] },
                        { type: "question", id: "w4d1q1", prompt: "Marque su nivel de madurez (1 bajo, 5 alto) en: 'Soy fuerte', 'La Palabra vive en mí', 'Me sobrepongo al mal':", placeholder: "Niveles..." },
                        { type: "header", text: "GUÍA DIARIA (Colosenses 2)" },
                        { type: "question", id: "w4d1g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w4d1g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w4d2", title: "Día 2: La gracia de dar",
                    content: [
                        { type: "text", text: "Llegar a ser maduro involucra aprender el papel de la dádiva. Nunca he conocido un discípulo maduro que no ofrende al menos el diezmo." },
                        { type: "header", text: "¿Por qué debe ofrendar?" },
                        { type: "text", text: "1. Satanás ha cegado a los inconversos (2 Cor 4.4); su ofrenda ayuda a alcanzarlos.\n2. Gratitud por la gracia de Dios.\n3. El juicio de Dios es inminente.\n4. El amor de Dios lo obliga." },
                        { type: "header", text: "Guía para ser Mayordomos de Dios" },
                        { type: "text", text: "Siga estos pasos para establecer su pacto de mayordomía:" },
                        { type: "checklist", id: "w4d2c1", prompt: "Paso 1: Reconocer a Dios como dueño:", options: ["Dios es el soberano Creador (Sal 24.1)", "El hombre es administrador (Sal 8.6)", "Dios suple necesidades (Fil 4.19)"] },
                        { type: "checklist", id: "w4d2c2", prompt: "Paso 2: Practicar responsabilidad:", options: ["Glorifico a Dios con mis bienes", "Administro correctamente", "Diezmo a mi iglesia", "Doy más que el diezmo", "Pago mis impuestos"] },
                        { type: "question", id: "w4d2q1", prompt: "Firme su compromiso de mayordomía:", placeholder: "Yo me comprometo a ser un mayordomo de Dios..." },
                        { type: "header", text: "GUÍA DIARIA (2 Corintios 9)" },
                        { type: "question", id: "w4d2g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w4d2g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w4d3", title: "Día 3: Discipule a otros",
                    content: [
                        { type: "text", text: "Hoy examinará cómo Jesús ayudó a sus discípulos a crecer. Hay 5 principios que Jesús usó:" },
                        {
                            type: "list", items: [
                                "1. El discipulador da el EJEMPLO; el discípulo imita.",
                                "2. El discipulador EXPLICA; el discípulo experimenta.",
                                "3. El discipulador ENTRENA; el discípulo aplica.",
                                "4. El discipulador APOYA; el discípulo demuestra.",
                                "5. El discipulador COMISIONA; el discípulo representa."
                            ]
                        },
                        { type: "header", text: "Principio 1: Dar el Ejemplo" },
                        { type: "text", text: "Jesús es el ejemplo supremo. En Mateo 4.19, invitó a Pedro a seguirlo." },
                        { type: "text", text: "<div class='verse-box'><strong>Mateo 4.19 (NVI):</strong> «Vengan, síganme —les dijo Jesús—, y los haré pescadores de hombres».</div>" },
                        { type: "text", text: "El ejemplo es vital porque es difícil creer lo que no se ve. Escriba nombres de personas que son ejemplo para usted." },
                        { type: "question", id: "w4d3q1", prompt: "Nombres de sus ejemplos cristianos:", placeholder: "Nombres..." },
                        { type: "header", text: "Principio 2: Explicar" },
                        { type: "text", text: "El ejemplo necesita explicación. Jesús explicaba que todo lo que hacía venía del Padre (Juan 17.7)." },
                        { type: "header", text: "GUÍA DIARIA (Marcos 12.1-13)" },
                        { type: "question", id: "w4d3g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w4d3g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w4d4", title: "Día 4: Entrene y apoye",
                    content: [
                        { type: "text", text: "Continuamos con los principios del discipulado." },
                        { type: "header", text: "Principio 3: Entrenar" },
                        { type: "text", text: "El discipulador ayuda al discípulo a encontrar su propio camino. Es como una relación de mentor y aprendiz. Cuando quise entrenar a un amigo para testificar, lo invité a acompañarme." },
                        { type: "header", text: "Principio 4: Apoyar" },
                        { type: "text", text: "Apoye a la persona mientras demuestra la conducta. Bernabé apoyó a Pablo hasta que maduró." },
                        { type: "header", text: "Cómo Guiar a Alguien a Comprometerse" },
                        { type: "text", text: "Al presentar el evangelio, debe llevar a la persona a decidir. Haga estas preguntas:" },
                        { type: "list", items: ["1. ¿Esto tiene sentido para usted?", "2. ¿Hay alguna razón por la cual no quiera recibir el regalo de Dios?", "3. ¿Está dispuesto a arrepentirse y depositar su fe en Cristo ahora?"] },
                        { type: "question", id: "w4d4q1", prompt: "Explique con sus palabras cómo guiar a alguien al compromiso:", placeholder: "Explicación..." },
                        { type: "header", text: "GUÍA DIARIA (Marcos 5.1-20)" },
                        { type: "question", id: "w4d4g_q1", prompt: "Qué me dijo Dios:", placeholder: "..." },
                        { type: "question", id: "w4d4g_q2", prompt: "Qué le dije yo a Dios:", placeholder: "..." }
                    ]
                },
                {
                    id: "w4d5", title: "Día 5: Alguien que lo aliente",
                    content: [
                        { type: "header", text: "Principio 5: Comisionar" },
                        { type: "text", text: "Las personas necesitan ser validadas. La iglesia comisionó a Bernabé y Saulo (Hechos 13.1-3). Jesús comisionó a Pedro ('Apacienta mis ovejas')." },
                        { type: "text", text: "<div class='verse-box'><strong>Hechos 13.2-3 (NVI):</strong> Mientras ayunaban y participaban en el culto al Señor, el Espíritu Santo dijo: «Apártenme ahora a Bernabé y a Saulo para el trabajo al que los he llamado». Así que... los despidieron.</div>" },
                        { type: "text", text: "Cuando usted valora los ministerios de otros, les hace saber que los apoya. Se convierte en un compañero a quien rendir cuentas." },
                        { type: "question", id: "w4d5q1", prompt: "Escriba los 5 principios del discipulado y la respuesta del discípulo (Ej: Da ejemplo -> Imita):", placeholder: "1...\n2...\n3...\n4...\n5..." },
                        { type: "header", text: "Misión con el Maestro" },
                        { type: "text", text: "La tarea del Maestro Constructor con un Discípulo Espiritual es FORMARLO. La meta es que madure y lleve fruto." }
                    ]
                }
            ]
        },
        {
            id: "w5",
            title: "Semana 5: Formación de discípulos",
            verse: "2 Crónicas 16.9a: Porque los ojos de Jehová contemplan toda la tierra, para mostrar su poder a favor de los que tienen corazón perfecto para con él.",
            days: [
                {
                    id: "w5intro", title: "Introducción Semana 5: Formación de Discípulos",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Usted podrá ayudar a otros creyentes a desarrollarse como discípulos de Cristo." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w5_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO:", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Memorice 2 Crónicas 16.9. Repase anteriores." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore por ministerios y sus discípulos." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Celebre un culto familiar. Apoye a alguien en su iglesia." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Testifique a una persona inconversa." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Aprenda características del discipulador. Prepare un mensaje bíblico." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>Porque los ojos de Jehová contemplan toda la tierra, para mostrar su poder a favor de los que tienen corazón perfecto para con él (2 Crónicas 16.9a).</div>" }
                    ]
                },
                {
                    id: "w5d1", title: "Día 1: Ejemplifique la dependencia",
                    content: [
                        { type: "header", text: "Historia de la Abuela" },
                        { type: "text", text: "Mi abuela tenía 62 descendientes... Timoteo aprendió de su madre y abuela (2 Tim 1.5)." },
                        { type: "header", text: "Necesidad de Discipular" },
                        { type: "text", text: "La Gran Comisión se centra en MULTIPLICAR. Si usted no discipula a otros para que enseñen, su rendimiento se agota en una generación." },
                        { type: "header", text: "Principios para Multiplicar (2 Tim 2.1-3)" },
                        { type: "text", text: "<div class='verse-box'><strong>2 Timoteo 2.1-3 (NVI):</strong> Tú, pues, hijo mío, fortalécete por la gracia que tenemos en Cristo Jesús. Lo que me oíste decir en presencia de muchos testigos, encárgalo a creyentes dignos de confianza, que a su vez estén capacitados para enseñar a otros. Soporta conmigo los sufrimientos, como buen soldado de Cristo Jesús.</div>" },
                        { type: "list", items: ["1. Sea un buen ejemplo de Jesucristo.", "2. Encomiende las verdades a discípulos confiables.", "3. Ministre incluso en adversidad."] },
                        { type: "question", id: "w5d1q1", prompt: "Lea 2 Timoteo 2.2. ¿Cuáles son las 4 generaciones mencionadas? (Pablo -> ... -> ... -> ...)", placeholder: "Pablo -> Timoteo -> Hombres fieles -> Otros" }
                    ]
                },
                {
                    id: "w5d2", title: "Día 2: Recursos para discipular",
                    content: [
                        { type: "text", text: "Hay 5 recursos importantes para discipular, basados en 2 Timoteo 1:" },
                        {
                            type: "list", items: [
                                "1. LA ORACIÓN (v.3): Pablo oraba día y noche.",
                                "2. EL TESTIMONIO (v.8): No avergonzarse (2 Tim 1.8: 'No te avergüences de dar testimonio...').",
                                "3. LA COMUNIÓN: Timoteo tenía a Pablo, su madre y abuela.",
                                "4. LA PALABRA (v.13-14): Guarda el buen depósito ('Cuida la buena enseñanza...').",
                                "5. EL MINISTERIO (v.16-18): Onesíforo sirvió a Pablo ('muchas veces me dio ánimo...')."
                            ]
                        },
                        { type: "checklist", id: "w5d2c1", prompt: "¿Cómo lo apoya la comunión de los creyentes?", options: ["Oran por mí", "Me animan a testificar", "Me preparan para ministrar", "Me hacen rendir cuentas", "Me respaldan en dificultad"] },
                        { type: "question", id: "w5d2q1", prompt: "Comprométase a apoyar a alguien en su iglesia. ¿A quién y cómo?", placeholder: "Nombre y acción..." }
                    ]
                },
                {
                    id: "w5d3", title: "Día 3: Multiplique discípulos",
                    content: [
                        { type: "text", text: "Principio 2: Encomiende verdades a discípulos confiables (2 Tim 2.2)." },
                        { type: "header", text: "Selección de Discípulos" },
                        { type: "text", text: "1. SELECCIONAR FIELES: No busque personalidad, busque fidelidad. Fiel significa confiable.\n2. INVERTIR EN IDÓNEOS: 'Idóneo' significa capaz de enseñar a otros." },
                        { type: "question", id: "w5d3q1", prompt: "¿Por qué es importante que el discípulo sea capaz de enseñar a otros?", placeholder: "Respuesta..." },
                        { type: "header", text: "Misión con el Maestro" },
                        { type: "text", text: "La tarea del Discipulador con el Discípulo Multiplicador es CAPACITARLO (Entrenarlo como a un aprendiz)." },
                        { type: "question", id: "w5d3q2", prompt: "Escriba nombres de personas que Dios le pone en el corazón para discipular:", placeholder: "Nombres..." }
                    ]
                },
                {
                    id: "w5d4", title: "Día 4: Ministrar en adversidad",
                    content: [
                        { type: "text", text: "Principio 3: Ministre en tiempos adversos (2 Tim 2.3). 'Sufre penalidades como buen soldado'." },
                        { type: "header", text: "Prioridad del Soldado" },
                        { type: "text", text: "Un soldado busca agradar a su comandante (Cristo). No se enreda en los negocios de la vida." },
                        { type: "question", id: "w5d4q1", prompt: "¿Qué cosas del mundo le impiden hacer de Cristo su prioridad?", placeholder: "Reflexión..." },
                        { type: "header", text: "Cómo Dirigir el Culto Familiar" },
                        { type: "text", text: "El culto familiar fortalece el hogar. Requiere un LÍDER (padre/madre), un HORARIO definido y un LUGAR sin distracciones. Elementos: Biblia y Oración." },
                        { type: "question", id: "w5d4q2", prompt: "Planee su culto familiar: ¿Cuándo y dónde lo hará?", placeholder: "Plan..." }
                    ]
                },
                {
                    id: "w5d5", title: "Día 5: Pureza y perseverancia",
                    content: [
                        { type: "text", text: "Pablo usa dos ilustraciones más:" },
                        { type: "text", text: "<div class='verse-box'><strong>2 Timoteo 2.5 (NVI):</strong> Así mismo, el atleta no recibe la corona de laurel a menos que compita de acuerdo con las reglas.<br><br><strong>2 Timoteo 2.6 (NVI):</strong> El labrador que trabaja duro tiene derecho a recibir primero parte de la cosecha.</div>" },
                        { type: "list", items: ["EL ATLETA (2 Tim 2.5): Debe luchar legítimamente. Requiere PUREZA e integridad.", "EL LABRADOR (2 Tim 2.6): Debe trabajar primero para participar de los frutos. Requiere PERSEVERANCIA."] },
                        { type: "header", text: "Cómo Preparar un Mensaje" },
                        { type: "text", text: "Para compartir un estudio bíblico:\n1. IDEA PRINCIPAL: Resuma el pasaje.\n2. OBJETIVO: Qué quiere que los oyentes hagan.\n3. BOSQUEJO: Explique, Iluste, Aplique.\n4. PRESENTACIÓN: Introducción (Capte interés), Cuerpo (¿Cómo?), Conclusión (¿Y entonces qué?)." },
                        { type: "question", id: "w5d5q1", prompt: "Prepare un bosquejo breve de un pasaje que le guste:", placeholder: "Pasaje y bosquejo..." }
                    ]
                }
            ]
        },
        {
            id: "w6",
            title: "Semana 6: Ministrar como colaboradores",
            verse: "Mateo 28.19-20: Por tanto, id, y haced discípulos a todas las naciones...",
            days: [
                {
                    id: "w6intro", title: "Introducción Semana 6: Ministrar como Colaboradores",
                    content: [
                        { type: "header", text: "La Meta de esta Semana" },
                        { type: "text", text: "Trabajará con los colaboradores con quienes formará un equipo discipulador." },
                        { type: "header", text: "Mi Andar con el Maestro" },
                        { type: "checklist", id: "w6_devocional", prompt: "DEDICARLE TIEMPO AL MAESTRO:", options: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
                        { type: "text", text: "<strong>VIVIR EN LA PALABRA:</strong> Memorice Mateo 28.19-20. Repase anteriores." },
                        { type: "text", text: "<strong>ORAR CON FE:</strong> Ore por su ministerio y un retiro de oración." },
                        { type: "text", text: "<strong>TENER COMUNIÓN:</strong> Informe de su progreso a un compañero." },
                        { type: "text", text: "<strong>TESTIFICAR:</strong> Examine un mapa mundial. Testifique." },
                        { type: "text", text: "<strong>MINISTRAR:</strong> Aprenda características del colaborador. Complete inventario de dones." },
                        { type: "text", text: "<div class='verse-box'><strong>Versículo para Memorizar:</strong><br>Por tanto, id, y haced discípulos a todas las naciones... (Mateo 28.19-20).</div>" }
                    ]
                },
                {
                    id: "w6d1", title: "Día 1: Los dones de la gracia de Dios",
                    content: [
                        { type: "header", text: "Historia: Youtie" },
                        { type: "text", text: "Cuando era misionero en Indonesia, discipulé a Youtie... Él se convirtió en un discípulo colaborador." },
                        { type: "header", text: "¿Qué son los dones espirituales?" },
                        { type: "text", text: "En 1 Corintios 12.4, 'dones' viene de 'charismata' (don de gracia). Lea Romanos 12.6." },
                        { type: "text", text: "<div class='verse-box'><strong>Romanos 12.6 (NVI):</strong> Tenemos dones diferentes, según la gracia que se nos ha dado. Si el don de alguien es el de profecía, que lo use en proporción con su fe.</div>" },
                        { type: "question", id: "w6d1q1", prompt: "¿Cuál es la base para recibir dones espirituales?", placeholder: "Respuesta..." },
                        { type: "text", text: "Definición: Los dones espirituales son habilidades espirituales dadas a los creyentes por el Espíritu Santo para equiparlos y realizar la obra de Dios." },
                        { type: "header", text: "Dones y Fruto" },
                        { type: "text", text: "Los dones (servicio, medios, lo que se tiene) son diferentes al Fruto del Espíritu (carácter, fin, lo que se es)." },
                        { type: "text", text: "<div class='verse-box'><strong>Gálatas 5.22 (NVI):</strong> En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad.</div>" },
                        { type: "checklist", id: "w6d1c1", prompt: "Marque cuáles son Fruto del Espíritu (Gálatas 5:22):", options: ["Amor", "Predicar", "Paz", "Sanar", "Paciencia", "Enseñar"] }
                    ]
                },
                {
                    id: "w6d2", title: "Día 2: Un cuerpo, muchos miembros",
                    content: [
                        { type: "text", text: "Los dones espirituales son diferentes a los talentos. Talentos son naturales (nacer), Dones son espirituales (nacer de nuevo)." },
                        { type: "header", text: "Cómo se reciben" },
                        { type: "text", text: "<div class='verse-box'><strong>1 Pedro 4.10 (NVI):</strong> Cada uno ponga al servicio de los demás el don que haya recibido, administrando bien la gracia de Dios en sus diversas formas.<br><br><strong>1 Corintios 12.11 (NVI):</strong> Todas estas cosas, sin embargo, las produce el único y mismo Espíritu, quien reparte a cada uno según él lo determina.</div>" },
                        { type: "text", text: "Cada creyente recibe al menos un don (1 Pedro 4.10). Usted no los escoge, Dios los distribuye como quiere (1 Cor 12.11). Todos los miembros son necesarios." },
                        { type: "question", id: "w6d2q1", prompt: "¿Qué dones cree que tiene usted?", placeholder: "Escriba sus pensamientos..." },
                        { type: "text", text: "En la familia de Dios cada miembro es importante. Si usted se desprecia, no es humildad, es ingratitud." }
                    ]
                },
                {
                    id: "w6d3", title: "Día 3: Edifique el cuerpo de Cristo",
                    content: [
                        { type: "text", text: "¿Cuál es el propósito de los dones? 1 Corintios 14.12 dice: 'Para edificación de la iglesia'." },
                        { type: "text", text: "<div class='verse-box'><strong>Efesios 4.11-13 (NVI):</strong> Él mismo constituyó a unos como apóstoles; a otros, profetas... a fin de capacitar al pueblo de Dios para la obra de servicio, para edificar el cuerpo de Cristo.</div>" },
                        { type: "question", id: "w6d3q1", prompt: "Lea Efesios 4.11-13. ¿Quién debe hacer la obra del ministerio?", placeholder: "Respuesta..." },
                        { type: "text", text: "Los líderes (apóstoles, pastores, maestros) capacitan a los santos (usted) para la obra del ministerio." },
                        { type: "header", text: "Parábola de los Talentos" },
                        { type: "text", text: "Usted será responsable de cómo usa sus dones. Un día Dios preguntará: '¿Usaste fielmente lo que te di?'" },
                        { type: "question", id: "w6d3q2", prompt: "¿Cómo respondería usted hoy a esa pregunta?", placeholder: "Reflexión..." }
                    ]
                },
                {
                    id: "w6d4", title: "Día 4: Ministre con otros",
                    content: [
                        { type: "text", text: "Los dones deben usarse en amor (1 Corintios 13). Sin amor, los dones no sirven de nada. El amor es el camino más excelente." },
                        { type: "text", text: "<div class='verse-box'><strong>1 Corintios 13 (Resumen NVI):</strong> Si hablo en lenguas... pero no tengo amor, no soy más que un metal que resuena... El amor es paciente, es bondadoso... Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta.</div>" },
                        { type: "header", text: "Una Aventura en el Ministerio" },
                        { type: "text", text: "1. CADA CREYENTE ES UN MINISTRO: Todos somos sacerdotes.\n2. LLAMADOS AL MINISTERIO: Al seguir a Cristo, somos llamados a servir.\n3. TIENE DONES: Dios lo equipó.\n4. DEBE PREPARARSE: Capacitarse para servir mejor." },
                        { type: "question", id: "w6d4q1", prompt: "Proceso para explorar un ministerio: Elija un área (ej: enseñanza, ayuda) y escriba cómo podría involucrarse:", placeholder: "Plan..." }
                    ]
                },
                {
                    id: "w6d5", title: "Día 5: Use sus dones",
                    content: [
                        { type: "text", text: "Seis maneras de reconocer sus dones:" },
                        {
                            type: "list", items: [
                                "1. CREA que tiene dones.",
                                "2. ORE pidiendo revelación.",
                                "3. DESCUBRA sus dones (estudie la Biblia, pruebe).",
                                "4. ACEPTE la responsabilidad de usarlos.",
                                "5. CONSIDERE sus deseos (¿Qué le gusta hacer?).",
                                "6. ACEPTE la confirmación de los demás."
                            ]
                        },
                        { type: "text", text: "Muchos creyentes viven en pobreza espiritual por no usar sus dones. Descúbralos y úselos para la gloria de Dios." },
                        { type: "header", text: "Conclusión de Vida Discipular" },
                        { type: "text", text: "Usted ha recorrido el camino del discípulo. Ha aprendido a tener una relación con Cristo, a desarrollar el carácter de Cristo, a tener victoria, y ahora a cumplir la misión de Cristo." },
                        { type: "question", id: "w6d5q1", prompt: "¿Qué paso tomará ahora para continuar su crecimiento?", placeholder: "Compromiso..." }
                    ]
                }
            ]
        },
        {
            id: "tools",
            title: "Recursos y Apéndices",
            verse: "Herramientas para el Discipulado",
            days: [
                {
                    id: "tool1", title: "El Maestro Constructor",
                    content: [
                        { type: "header", text: "Las Etapas del Crecimiento Espiritual" },
                        { type: "text", text: "El Maestro Constructor ilustra cómo un creyente crece y cómo ayudar a otros a crecer." },
                        {
                            type: "list", items: [
                                "1. ESPIRITUALMENTE MUERTO: No tiene a Cristo. Tarea: Testificarle.",
                                "2. NIÑO ESPIRITUAL (Criatura): Nuevo creyente. Necesita leche espiritual. Tarea: Instruirlo/Cuidarlo.",
                                "3. DISCÍPULO ESPIRITUAL (Adulto joven): Crece, se alimenta solo. Tarea: Formarlo.",
                                "4. DISCÍPULO MULTIPLICADOR (Padre): Ayuda a otros a crecer. Tarea: Capacitarlo/Entrenarlo.",
                                "5. COLABORADOR (Abuelo): Líder maduro que trabaja con otros líderes. Tarea: Comisionarlo/Asociarse."
                            ]
                        }
                    ]
                },
                {
                    id: "tool2", title: "El Evangelio en la Mano",
                    content: [
                        { type: "header", text: "Método para Presentar el Evangelio" },
                        { type: "text", text: "Use los dedos de su mano para recordar los puntos clave de Romanos 6.23." },
                        {
                            type: "list", items: [
                                "PULGAR (Hacia arriba): DIOS. Él es santo y nos ama.",
                                "ÍNDICE (Señalando): EL HOMBRE (Pecado). Todos pecaron y están separados de Dios.",
                                "MEDIO (El más alto): CRISTO. Dios envió a Jesús, quien murió en la cruz por nosotros.",
                                "ANULAR (Compromiso): FE/ACEPTAR. Debemos recibir el regalo por fe.",
                                "MEÑIQUE (Pequeño): VIDA ETERNA. El resultado es vida eterna segura."
                            ]
                        },
                        { type: "text", text: "Pregunta clave: ¿Hay alguna razón por la cual no quiera recibir el regalo de Dios hoy?" }
                    ]
                },
                {
                    id: "tool3", title: "Definiciones de Dones Espirituales",
                    content: [
                        { type: "header", text: "Dones de Servicio" },
                        { type: "list", items: ["ADMINISTRACIÓN: Organizar personas y recursos.", "AYUDA: Apoyar a otros en tareas prácticas.", "MISERICORDIA: Sentir compasión por los que sufren y actuar.", "DAR: Contribuir con recursos generosamente.", "SERVICIO: Identificar y satisfacer necesidades prácticas."] },
                        { type: "header", text: "Dones de Enseñanza" },
                        { type: "list", items: ["ENSEÑANZA: Comunicar verdades bíblicas claramente.", "EXHORTACIÓN: Animar y motivar a otros.", "SABIDURÍA: Aplicar verdad a situaciones de vida.", "CONOCIMIENTO: Entender verdades profundas."] },
                        { type: "header", text: "Dones de Liderazgo/Testimonio" },
                        { type: "list", items: ["LIDERAZGO: Guiar a otros hacia metas divinas.", "EVANGELISMO: Comunicar el evangelio efectivamente.", "PASTORADO: Cuidar y guiar a un grupo de creyentes.", "FE: Confiar en Dios para grandes cosas.", "APOSTOLADO: Iniciar nuevos ministerios/iglesias."] }
                    ]
                }
            ]
        }
    ]
};
