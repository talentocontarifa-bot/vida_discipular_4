// --- DATOS DEL LIBRO (SEMANAS 1-6 + RECURSOS) ---
const bookData = {
    weeks: [
        {
            id: "w1",
            title: "Semana 1: Cómo enderezar relaciones torcidas",
            verse: "Mateo 5.23-24: Por tanto, si traes tu ofrenda al altar, y allí te acuerdas de que tu hermano tiene algo contra ti...",
            days: [
                {
                    id: "w1d1", title: "Día 1: Importancia de las relaciones",
                    content: [
                        { type: "text", text: "Su líder le presentó el Maestro Constructor en la primera sesión del grupo. Este plan describe el camino del discipulado y el crecimiento espiritual. El Maestro Constructor ilustra cómo las relaciones son de vital importancia para predicar el evangelio y llevar a cabo la misión de Cristo. ¿Cuál es nuestra misión como discípulos de Cristo?" },
                        { type: "list", items: ["Glorificar a Dios siendo un discípulo obediente al Señor Jesucristo durante toda la vida", "Glorificar a Dios haciendo discípulos en todas las naciones", "Sumarse a la misión de Dios para: glorificar su nombre; exaltar a Cristo como el Señor; reconciliar al mundo con Él; establecer su reino."] },
                        { type: "text", text: "Fortalecer las relaciones personales es esencial para predicar el evangelio y hacer discípulos en todas las naciones. Las relaciones inadecuadas levantan barreras para testificar." },
                        { type: "header", text: "El Centro de Su Experiencia" },
                        { type: "text", text: "La comunión entre los creyentes es el centro de su experiencia cristiana. Su relación con Dios, por medio de Cristo, lo une a usted con otros creyentes formando así el cuerpo de Cristo." },
                        { type: "question", id: "w1d1q1", prompt: "Lea 1 Juan 3.14. ¿Cómo sabemos que hemos pasado de muerte a vida?", placeholder: "Escriba su respuesta aquí..." },
                        { type: "text", text: "El amor de los unos por los otros es la manera de demostrar que hemos pasado de la muerte espiritual a la vida eterna en Cristo. Sin embargo, el pecado aún se interpone en la comunión de unos con otros." },
                        { type: "checklist", id: "w1d1c1", prompt: "Subraye (marque) las causas de los problemas entre usted y los demás:", options: ["Celos", "Codicia", "Amargura", "Orgullo", "Insensibilidad", "Impaciencia", "Ira", "Chisme", "Falta de tacto", "Malentendidos", "Vanagloria", "Avaricia"] },
                        { type: "text", text: "Las diferencias de opiniones, conflictos de personalidades y luchas por el poder también dañan las relaciones personales. Lea Mateo 20.20-24." },
                        { type: "question", id: "w1d1q2", prompt: "¿Con quién estaban enfadados los discípulos? ¿Por qué?", placeholder: "Responda aquí..." },
                        { type: "text", text: "Nuestra relación con Cristo hace posible que restauremos las relaciones personales. Por medio del perdón podemos reconciliarnos con Dios y con los demás. Lea 1 Juan 1.7." },
                        { type: "question", id: "w1d1q3", prompt: "¿Cuál es la base de la comunión entre los creyentes? ¿Qué limpia esa comunión?", placeholder: "Responda aquí..." }
                    ]
                },
                {
                    id: "w1d2", title: "Día 2: Lo que Cristo manda",
                    content: [
                        { type: "text", text: "Como aprendió el día 1, los creyentes no son inmunes a los problemas interpersonales. Sin embargo, cuando sepa que hay un problema interpersonal, corríjalo inmediatamente." },
                        { type: "header", text: "Su Relación con Dios" },
                        { type: "question", id: "w1d2q1", prompt: "Lea Mateo 6.14-15 y 1 Juan 4.20-21. Resúmalos con sus propias palabras:", placeholder: "Escriba su resumen..." },
                        { type: "text", text: "De acuerdo a Mateo 6.14-15 el pecado destruye las relaciones humanas. Si usted no perdona a los demás cuando lo agravian, ¿cómo puede esperar que Dios lo perdone?" },
                        { type: "header", text: "El Mandamiento de Cristo" },
                        { type: "question", id: "w1d2q2", prompt: "Trate de escribir de memoria Mateo 5.23-24:", placeholder: "Escriba el versículo..." },
                        { type: "checklist", id: "w1d2c1", prompt: "Lea Mateo 18.21-22 y Juan 13.34-35. Marque Verdadero o Falso para las siguientes declaraciones:", options: ["Según Mateo 5.23-24, usted debe restaurar las relaciones sólo si la otra persona lo ha agraviado a usted.", "Según Mateo 18.21-22, usted debe perdonar 490 veces.", "Según Juan 13.34-35, no se espera que usted ame a los demás tal como Cristo lo amó a usted."] }
                    ]
                },
                {
                    id: "w1d3", title: "Día 3: Cómo dar los primeros pasos",
                    content: [
                        { type: "text", text: "El perdón es una decisión deliberada de la voluntad. Aunque la otra persona nunca le pida perdón, usted puede anticiparse y decidir perdonar." },
                        { type: "header", text: "El Peligro del Resentimiento" },
                        { type: "checklist", id: "w1d3c1", prompt: "Lea Hebreos 12.15 y marque los peligros que se especifican:", options: ["La persona puede olvidar", "No perdonar a dicha persona", "Raíz de amargura que contamina"] },
                        { type: "question", id: "w1d3q1", prompt: "¿Cuál es la mejor forma de abordar el problema? (Escriba su frase de apertura ideal)", placeholder: "Ej: Siento mucho que..." },
                        { type: "text", text: "Pasos para la reconciliación: 1. Reconcíliese en privado. 2. Confiese sus faltas. 3. Pregunte si ha ofendido." }
                    ]
                },
                {
                    id: "w1d4", title: "Día 4: Reparar daños",
                    content: [
                        { type: "text", text: "Después de pedir perdón, se necesita restituir (Zaqueo, Lucas 19.8)." },
                        { type: "checklist", id: "w1d4c1", prompt: "¿Qué constituye restitución adecuada?", options: ["Decir 'lo siento'", "Retractarse públicamente", "Devolver lo robado", "Reparar el daño material"] },
                        { type: "question", id: "w1d4q1", prompt: "Lea Mateo 18.15-17. Si un hermano peca contra ti, ¿cuál es el primer paso?", placeholder: "Respuesta..." }
                    ]
                },
                {
                    id: "w1d5", title: "Día 5: Vivir en paz",
                    content: [
                        { type: "text", text: "La oración es el medio espiritual que proporciona la solución a los conflictos." },
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
                    id: "w2d1", title: "Día 1: Las relaciones son el todo",
                    content: [
                        { type: "header", text: "Historia del Boxeador" },
                        { type: "text", text: "En un avión, oré para sentarme junto a alguien en quien Dios obrara. Me senté junto a un boxeador. Al final del vuelo, oró para recibir a Cristo." },
                        { type: "header", text: "La Relación Modelo" },
                        { type: "question", id: "w2d1q1", prompt: "Lea Juan 17.1. ¿Cuál era el propósito de Jesús?", placeholder: "Respuesta..." },
                        { type: "checklist", id: "w2d1c1", prompt: "¿Cómo puede glorificar al Padre?", options: ["Tiempo devocional", "Prioridades financieras", "Actividades sanas"] },
                        { type: "question", id: "w2d1q2", prompt: "¿A quién le ha encomendado Dios para discipular?", placeholder: "Nombres..." }
                    ]
                },
                {
                    id: "w2d2", title: "Día 2: Enseñanzas de la obediencia",
                    content: [
                        { type: "text", text: "Juan 17.6-7: Jesús reveló al Padre, enseñó que el Padre es la fuente y enseñó obediencia." },
                        { type: "question", id: "w2d2q1", prompt: "¿Cómo puede revelar a Dios a sus discípulos?", placeholder: "Ideas..." },
                        { type: "question", id: "w2d2q2", prompt: "Según Juan 17.6, ¿qué identifica a los verdaderos discípulos?", placeholder: "Respuesta..." }
                    ]
                },
                {
                    id: "w2d3", title: "Día 3: Salvación: Clave de la relación",
                    content: [
                        { type: "text", text: "La vida eterna es conocer a Dios (Juan 17.3). La persona sin Cristo está 'muerta' espiritualmente." },
                        { type: "question", id: "w2d3q1", prompt: "Escriba las características de una persona espiritualmente muerta (Ef 2.12, 4.18):", placeholder: "Características..." },
                        { type: "header", text: "Método para Testificar" },
                        { type: "text", text: "Use los 4 puntos: Familia, Intereses, Religión, Preguntas de Diagnóstico." },
                        { type: "question", id: "w2d3q2", prompt: "Escriba la primera pregunta de diagnóstico:", placeholder: "¿Está seguro de tener vida eterna...?" }
                    ]
                },
                {
                    id: "w2d4", title: "Día 4: Orar por los discípulos",
                    content: [
                        { type: "text", text: "Jesús oró por sus discípulos, no por el mundo (en ese momento). Oró por protección, santificación y unidad." },
                        { type: "question", id: "w2d4q1", prompt: "¿Cómo puede proteger del maligno a quienes discipula?", placeholder: "Estrategias..." },
                        { type: "checklist", id: "w2d4c1", prompt: "Grados de receptividad (El Sembrador):", options: ["Buena tierra", "Pedregosa", "Espinos", "Dura"] }
                    ]
                },
                {
                    id: "w2d5", title: "Día 5: La orden es testificar",
                    content: [
                        { type: "text", text: "Los campos están blancos para la cosecha. Jesús nos eligió para llevar fruto." },
                        { type: "question", id: "w2d5q1", prompt: "Lea 1 Timoteo 2.3-4. ¿Cuál es la voluntad de Dios?", placeholder: "Respuesta..." },
                        { type: "question", id: "w2d5q2", prompt: "Escriba nombres de personas a quienes ha testificado:", placeholder: "Nombres y reacciones..." }
                    ]
                }
            ]
        },
        {
            id: "w3",
            title: "Semana 3: Instruir a los niños espirituales",
            verse: "1 Pedro 2.2-3: Desead, como niños recién nacidos, la leche espiritual no adulterada, para que por ella crezcáis para salvación...",
            days: [
                {
                    id: "w3d1", title: "Día 1: Seguimiento",
                    content: [
                        { type: "header", text: "Historia: Joe Case" },
                        { type: "text", text: "Cuando vivía en Nashville, hablaba con mi entrenador, Joe Case, en el gimnasio de la Asociación Cristiana de Jóvenes (YMCA). Un día lo vi leyendo la Biblia y supe que Dios estaba obrando. Joe me contó que un compañero le había dicho: 'Cállate hasta que leas la Biblia'. Había empezado a leer Génesis. Con el tiempo, le presenté a Cristo en una cancha vacía del gimnasio. La siguiente semana Joe ya se había bautizado." },
                        { type: "text", text: "Para mí fue un privilegio observar a Joe desde ser incrédulo hasta transformarse en un nuevo creyente gozoso. El seguimiento fue sencillo porque nos veíamos regularmente." },
                        { type: "header", text: "Cuidar al Nuevo Creyente" },
                        { type: "text", text: "El seguimiento significa cuidar al nuevo creyente desde su nuevo nacimiento hasta que se afirme espiritualmente. La Gran Comisión (Mateo 28.19-20) implica este cuidado." },
                        { type: "checklist", id: "w3d1c1", prompt: "Marque las oraciones verdaderas según Mateo 28.19-20:", options: ["Hacer discípulos es opcional.", "La persona es madura inmediatamente después de la conversión.", "El discipulador termina su tarea cuando el discípulo obedece lo que Cristo enseñó."] },
                        { type: "header", text: "Ofrezca Ayuda Inmediata" },
                        { type: "question", id: "w3d1q1", prompt: "Lea Hechos 9.15-19. ¿Qué hizo Ananías con respecto al seguimiento de Pablo?", placeholder: "Respuesta..." },
                        { type: "question", id: "w3d1q2", prompt: "Lea Hechos 9.26-28. ¿Qué hizo Bernabé para ayudar a Pablo a afirmarse?", placeholder: "Respuesta..." },
                        { type: "text", text: "Ayudar al nuevo creyente a afirmarse en el nuevo grupo de amigos es crucial. Bernabé respondió por Pablo cuando los demás dudaban." },
                        { type: "header", text: "Una Misión con el Maestro: El Niño Espiritual" },
                        { type: "checklist", id: "w3d1c2", prompt: "Lea 1 Corintios 3.1 y Efesios 4.14. Marque las características de un niño espiritual:", options: ["Sigue la orientación del mundo", "Propenso a celos y disputas", "Está bien fortalecido en su fe", "Propenso a ser tentado", "Cree en falsas enseñanzas con facilidad", "No sabe discernir quién le puede hacer daño"] }
                    ]
                },
                {
                    id: "w3d2", title: "Día 2: Animemos a otros",
                    content: [
                        { type: "text", text: "Bernabé fue conocido como el 'Hijo de Consolación'. En Hechos 11.22-24, cuando vio la gracia de Dios en Antioquía, se regocijó y exhortó a todos a permanecer fieles." },
                        { type: "question", id: "w3d2q1", prompt: "¿Quién lo alentó a usted cuando recibió al Señor? ¿Qué hizo esa persona?", placeholder: "Nombre y acciones..." },
                        { type: "text", text: "Bernabé también acompañó a Pablo. En Hechos 13.43, vemos que les 'persuadían a que perseverasen en la gracia de Dios'." },
                        { type: "header", text: "Casos de Estudio: ¿Cómo ayudaría usted?" },
                        { type: "text", text: "Piense en las siguientes situaciones y cómo un creyente maduro podría ayudar." },
                        { type: "question", id: "w3d2q2", prompt: "Caso 1: Caridad rompió con su novio con quien vivía para seguir a Cristo. Se siente sola. ¿Qué haría usted?", placeholder: "Ideas de apoyo..." },
                        { type: "question", id: "w3d2q3", prompt: "Caso 2: Jorge luchaba contra la pornografía. Ahora viaja mucho y se siente tentado. ¿Cómo ayudarlo?", placeholder: "Ideas de apoyo..." },
                        { type: "question", id: "w3d2q4", prompt: "Caso 3: Felipe nunca había orado ni tenido Biblia. Se siente incómodo en la clase. ¿Qué haría?", placeholder: "Ideas de apoyo..." }
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
                        { type: "list", items: ["1 Tes 2.1-5 -> Hermano (trato igualitario)", "1 Tes 2.6-7 -> Madre (cuidado tierno)", "1 Tes 2.11-12 -> Padre (exhortación y consuelo)"] },
                        { type: "text", text: "Un padre espiritual debe proteger, enseñar, ser ejemplo y trabajar hasta que el creyente madure." },
                        { type: "question", id: "w3d3q2", prompt: "En el Maestro Constructor, ¿cuál es la tarea del Discipulador con el Niño Espiritual?", placeholder: "Respuesta..." }
                    ]
                },
                {
                    id: "w3d4", title: "Día 4: Ejemplos de seguimiento",
                    content: [
                        { type: "text", text: "La iglesia primitiva nos da pautas de seguimiento en Hechos 2.42-47." },
                        { type: "question", id: "w3d4q1", prompt: "Lea Hechos 2.42-47. Subraye o escriba qué hacían los primeros cristianos:", placeholder: "Perseveraban en..." },
                        { type: "text", text: "También en Hechos 11.19-23, la iglesia de Jerusalén envió a Bernabé hasta Antioquía para cuidar a los nuevos creyentes. No los dejaron solos." },
                        { type: "header", text: "Preparación para Ministrar" },
                        { type: "text", text: "¿Cómo puede usar las disciplinas de la Cruz del Discípulo para instruir a un nuevo creyente?" },
                        { type: "question", id: "w3d4q2", prompt: "Vivir la Palabra:", placeholder: "Cómo explicarlo..." },
                        { type: "question", id: "w3d4q3", prompt: "Orar con fe:", placeholder: "Cómo explicarlo..." },
                        { type: "question", id: "w3d4q4", prompt: "Comunión y Testimonio:", placeholder: "Cómo explicarlo..." }
                    ]
                },
                {
                    id: "w3d5", title: "Día 5: Cómo cuidar el seguimiento",
                    content: [
                        { type: "text", text: "Tal como un bebé necesita cuidados, un nuevo creyente necesita orientación. Aquí hay 5 disciplinas prácticas para el seguimiento:" },
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
                        { type: "text", text: "En las semanas anteriores aprendió que es difícil discipular a alguien con quien no tiene una buena relación. Procure reconciliarse con quien sea difícil antes de intentar guiarlo." }
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
                    id: "w4d1", title: "Día 1: Crezca hacia la madurez",
                    content: [
                        { type: "text", text: "Cuando Shirley y yo éramos novios, ella trabajaba con un arquitecto. Un hombre le pidió una hoja de 45 pies de largo para dibujar su vida espiritual. ¿Cómo mide usted su madurez? El propósito de Dios es que sea espiritualmente maduro." },
                        { type: "header", text: "La Provisión y el Plan de Dios" },
                        { type: "text", text: "En Colosenses 1.21-2.8 Pablo revela el propósito de Dios. Lea Colosenses 1.13-14 y 21-22. Dios nos ha librado de la potestad de las tinieblas y nos ha trasladado al reino de su Hijo." },
                        { type: "checklist", id: "w4d1c1", prompt: "Relacione los versículos con los propósitos de Dios:", options: ["Col 1.22: Ser presentados santos y sin mancha", "Col 1.13: Ser trasladados al Reino", "Col 1.9: Ser llenos del conocimiento de su voluntad", "Col 1.10: Andar como es digno del Señor"] },
                        { type: "header", text: "Ilustraciones de Crecimiento" },
                        { type: "list", items: ["1. Crecimiento Humano (Niño -> Adulto)", "2. Crecimiento de Planta (Arraigados, Ef 3.17)", "3. Construcción de Edificio (Edificados en Él, 1 Cor 3.11)"] },
                        { type: "question", id: "w4d1q1", prompt: "Marque su nivel de madurez (1 bajo, 5 alto) en: 'Soy fuerte', 'La Palabra vive en mí', 'Me sobrepongo al mal':", placeholder: "Niveles..." }
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
                        { type: "question", id: "w4d2q1", prompt: "Firme su compromiso de mayordomía:", placeholder: "Yo me comprometo a ser un mayordomo de Dios..." }
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
                        { type: "text", text: "Jesús es el ejemplo supremo. En Mateo 4.19, invitó a Pedro a seguirlo. El ejemplo es vital porque es difícil creer lo que no se ve. Escriba nombres de personas que son ejemplo para usted." },
                        { type: "question", id: "w4d3q1", prompt: "Nombres de sus ejemplos cristianos:", placeholder: "Nombres..." },
                        { type: "header", text: "Principio 2: Explicar" },
                        { type: "text", text: "El ejemplo necesita explicación. Jesús explicaba que todo lo que hacía venía del Padre (Juan 17.7)." }
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
                        { type: "question", id: "w4d4q1", prompt: "Explique con sus palabras cómo guiar a alguien al compromiso:", placeholder: "Explicación..." }
                    ]
                },
                {
                    id: "w4d5", title: "Día 5: Alguien que lo aliente",
                    content: [
                        { type: "header", text: "Principio 5: Comisionar" },
                        { type: "text", text: "Las personas necesitan ser validadas. La iglesia comisionó a Bernabé y Saulo (Hechos 13.1-3). Jesús comisionó a Pedro ('Apacienta mis ovejas')." },
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
                    id: "w5d1", title: "Día 1: Ejemplifique la dependencia",
                    content: [
                        { type: "header", text: "Historia de la Abuela" },
                        { type: "text", text: "Mi abuela tenía 62 descendientes. Me dijo: 'Yo solo crié a 6. De los demás se ocuparon sus padres'. Así funciona la multiplicación espiritual. Timoteo aprendió de su madre y abuela (2 Tim 1.5)." },
                        { type: "header", text: "Necesidad de Discipular" },
                        { type: "text", text: "La Gran Comisión se centra en MULTIPLICAR. Si usted no discipula a otros para que enseñen, su rendimiento se agota en una generación." },
                        { type: "header", text: "Principios para Multiplicar (2 Tim 2.1-3)" },
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
                                "2. EL TESTIMONIO (v.8): No avergonzarse.",
                                "3. LA COMUNIÓN: Timoteo tenía a Pablo, su madre y abuela.",
                                "4. LA PALABRA (v.13-14): Guarda el buen depósito.",
                                "5. EL MINISTERIO (v.16-18): Onesíforo sirvió a Pablo."
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
                    id: "w6d1", title: "Día 1: Los dones de la gracia de Dios",
                    content: [
                        { type: "header", text: "Historia: Youtie" },
                        { type: "text", text: "Cuando era misionero en Indonesia, discipulé a Youtie. Él comenzó a pastorear una iglesia en casa... Más tarde llegó a ser misionero en Kalimantan. Youtie no es mi discípulo, es un discípulo del Señor. Él se convirtió en un discípulo colaborador." },
                        { type: "header", text: "¿Qué son los dones espirituales?" },
                        { type: "text", text: "En 1 Corintios 12.4, 'dones' viene de 'charismata' (don de gracia). Lea Romanos 12.6." },
                        { type: "question", id: "w6d1q1", prompt: "¿Cuál es la base para recibir dones espirituales?", placeholder: "Respuesta..." },
                        { type: "text", text: "Definición: Los dones espirituales son habilidades espirituales dadas a los creyentes por el Espíritu Santo para equiparlos y realizar la obra de Dios." },
                        { type: "header", text: "Dones y Fruto" },
                        { type: "text", text: "Los dones (servicio, medios, lo que se tiene) son diferentes al Fruto del Espíritu (carácter, fin, lo que se es)." },
                        { type: "checklist", id: "w6d1c1", prompt: "Marque cuáles son Fruto del Espíritu (Gálatas 5:22):", options: ["Amor", "Predicar", "Paz", "Sanar", "Paciencia", "Enseñar"] }
                    ]
                },
                {
                    id: "w6d2", title: "Día 2: Un cuerpo, muchos miembros",
                    content: [
                        { type: "text", text: "Los dones espirituales son diferentes a los talentos. Talentos son naturales (nacer), Dones son espirituales (nacer de nuevo)." },
                        { type: "header", text: "Cómo se reciben" },
                        { type: "text", text: "Cada creyente recibe al menos un don (1 Pedro 4.10). Usted no los escoge, Dios los distribuye como quiere (1 Cor 12.11). Todos los miembros son necesarios." },
                        { type: "question", id: "w6d2q1", prompt: "¿Qué dones cree que tiene usted?", placeholder: "Escriba sus pensamientos..." },
                        { type: "text", text: "En la familia de Dios cada miembro es importante. Si usted se desprecia, no es humildad, es ingratitud." }
                    ]
                },
                {
                    id: "w6d3", title: "Día 3: Edifique el cuerpo de Cristo",
                    content: [
                        { type: "text", text: "¿Cuál es el propósito de los dones? 1 Corintios 14.12 dice: 'Para edificación de la iglesia'." },
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
