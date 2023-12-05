// Obtener referencias a los elementos del DOM
const message = document.querySelector('span');
const input = document.querySelector('.search-input');
const boton = document.querySelector('#change-message');
const preguntasEncontradasContainer = document.querySelector('#preguntas-encontradas');

// Estructura de datos para almacenar preguntas y respuestas

// ...


// Agregar un evento click al botón de búsqueda
boton.addEventListener('click', () => {
    // Obtener el valor del input de búsqueda
    const searchTerm = input.value.toLowerCase();

    // Filtrar las preguntas que coinciden con el término de búsqueda
    const preguntasCoincidentes = preguntasYRespuestas.filter(item =>
        item.titulo.toLowerCase().includes(searchTerm)
    );

    // Actualizar el mensaje con el resultado de la búsqueda
    if (preguntasCoincidentes.length > 0) {
        const preguntasEncontradasHTML = preguntasCoincidentes.map(item =>
            `<div><strong>${item.indice} - ${item.titulo}</strong>${item.imagen ? `<br><img src="${item.imagen}" alt="Imagen de la pregunta">` : ''}${item.respuestas ? item.respuestas.map(respuesta => `<p>${respuesta}</p>`).join('') : ''}</div>`
        ).join('');

        preguntasEncontradasContainer.innerHTML = `<div>Preguntas encontradas:</div>${preguntasEncontradasHTML}`;
    } else {
        preguntasEncontradasContainer.innerHTML = '<div>No se encontraron preguntas.</div>';
    }
});


const preguntasYRespuestas = [
    {
        "indice": 1,
        "titulo": "Los usuarios se quejan de un acceso esporádico a Internet cada tarde. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Compruebe que no hay una ruta predeterminada en ninguna de las tablas de enrutamiento del router perimetral.",
            "Cree una ruta estática flotante a esa red.",
            "Cree rutas estáticas a todas las redes internas y una ruta predeterminada a Internet.",
            "<span style='color: red;'>Compruebe las estadísticas de la ruta predeterminada para la sobresaturación.</span>"
        ]
    },
    {
        "indice": 2,
        "titulo": "Consulte la ilustración. ¿Qué hará el router R1 con un paquete que tiene una dirección IPv6 de destino 2001:db8:cafe:5::1?",
        "imagen": "2021-09-29_235032.jpg",
        "respuestas": [
            "Descartará el paquete",
            "Reenviará el paquete por GigabitEthernet0/0.",
            "<span style='color: red;'>Reenviará el paquete por Serial0/0/0.</span>",
            "Reenviará el paquete por GigabitEthernet0/1."
        ]
    },
    {
        "indice": 3,
        "titulo": "Haga coincidir el número de paso con la secuencia de etapas que se producen durante el proceso de conmutación por error de HSRP. (No se utilizan todas las opciones).",
        "imagen": "2021-09-29_235457.jpg"
    },
    {
        "indice": 4,
        "titulo": "Seleccione los tres modos de establecimiento de canales PAgP. (Escoja tres opciones).",
        "respuestas": [
            "alternativo",
            "<span style='color: red;'>auto</span>",
            "designado",
            "activo",
            "<span style='color: red;'>deseado</span>",
            "<span style='color: red;'>on</span>"
        ]
    },
    {
        "indice": 5,
        "titulo": "Consulte la exhibición. Un switch de capa 3 se encarga del routing para tres VLAN y se conecta a un router para obtener conectividad a Internet. ¿Cuáles son las dos respuestas correctas para la configuración del switch?",
        "imagen": "57-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
          "(config)# interface vlan 1",
          "(config-if)# ip address 192.168.1.2 255.255.255.0",
          "(config-if)# no shutdown<br>",

          "<span style='color: red;'>(config)# interface gigabitethernet 1/1</span>",
          "<span style='color: red;'>(config-if)# no switchport</span>",
          "<span style='color: red;'>(config-if)# ip address 192.168.1.2 255.255.255.252</span>",

          "<span style='color: red;'>(config)# ip routing</span><br>",

          "(config)# interface gigabitethernet1/1",
          "(config-if)# switchport mode trunk<br>",

          "(config)# interface fastethernet0/4",
          "(config-if)# switchport mode trunk<br>"
        ]
      },
    {
        "indice": 6,
        "titulo": "El enrutamiento entre VLAN exitoso ha estado funcionando en una red con varias VLAN a través de varios switches durante algún tiempo. Cuando falla un vínculo troncal entre switch y el protocolo de árbol de expansión muestra un vínculo troncal de copia de seguridad, se informa de que los hosts de dos VLAN pueden acceder a algunos recursos de red, pero no a todos los que se podía acceder anteriormente. ¿Cuál es la causa más probable de este problema?",
        "respuestas": [
            "También falló el enrutamiento entre VLAN cuando falló el enlace troncal.",
            "Las VLAN permitidas en el vínculo de copia de seguridad no se configuraron correctamente.",
            "Error en el protocolo de enlace troncal dinámico en el vínculo.",
            "<span style='color: red;'>Se ha deshabilitado la función de puerto perimetral protegido en las interfaces troncal de respaldo.</span>"
        ]
    },
    {
        "indice": 7,
        "titulo": "Consulte la ilustración. El administrador de red configura ambos switches como se muestra. Sin embargo, el host C no puede hacer ping al host D y el host E no puede hacer ping al host F. ¿Qué debe hacer el administrador para habilitar esta comunicación?",
        "imagen": "2021-09-29_235851.jpg",
        "respuestas": [
            "<span style='color: red;'>Configurar cualquier puerto de enlace troncal en el modo dinámico deseado.</span>",
            "Eliminar la VLAN nativa del enlace troncal.",
            "Asociar los hosts A y B con la VLAN 10 en lugar de la VLAN 1.",
            "Incluir un router en la topología.",
            "Agregar el comando switchport nonegotiate a la configuración del SW2."
        ]
    },
    {
        "indice": 8,
        "titulo": "Consulte la ilustración. Según la configuración y el resultado que se muestran, ¿por qué falta la VLAN 99?",
        "imagen": "2021-09-29_235813.jpg",
        "respuestas": [
            "porque la VLAN 1 está conectada y sólo puede haber una VLAN de administración en el switch",
            "porque la VLAN 99 no es una VLAN de administración válida",
            "<span style='color: red;'>porque la VLAN 99 aún no se ha creado</span>",
            "porque hay un problema de cableado en la VLAN 99"
        ]
    },
    {
        "indice": 9,
        "titulo": "¿Cuáles son los tres pares de modos de enlace troncal que establecen un enlace troncal funcional entre dos switches Cisco? (Elija tres).",
        "respuestas": [
            "<span style='color: red;'>Dinámico deseado y enlace troncal</span>",
            "Acceso y dinámico automático",
            "<span style='color: red;'>Dinámico deseado y dinámico automático</span>",
            "Acceso y enlace troncal",
            "Dinámico automático y dinámico automático",
            "<span style='color: red;'>Dinámico deseado y dinámico deseado</span>",
        ]
    },
    {
        "indice": 10,
        "titulo": "Se ha configurado una ruta estática en un router. Sin embargo, la red de destino ya no existe. ¿Qué debe hacer un administrador para eliminar la ruta estática de la tabla de enrutamiento?",
        "respuestas": [
            "Nada. La ruta estática desaparecerá por sí sola",
            "Cambie la distancia administrativa para esa ruta",
            "Cambie la métrica de enrutamiento para esa ruta",
            "<span style='color: red;'>Elimine la ruta usando el comando no ip route.</span>"
        ]
    },
    {
        "indice": 11,
        "titulo": "Consulte la ilustración. Un administrador de redes agregó una nueva subred a la red y necesita que los hosts de dicha subred reciban direcciones IPv4 del servidor DHCPv4. ¿Qué dos comandos permiten que los hosts de la nueva subred reciban las direcciones del servidor DHCP4? (Elija dos opciones.)",
        "imagen": "2021-09-29_235959.jpg",
        "respuestas": [
            "R1(config-if)# ip helper-address 10.1.0.254",
            "R2(config)# interface G0/0",
            "<span style='color: red;'>R1(config-if)# ip helper-address 10.2.0.250</span>",
            "R2(config-if)# ip helper-address 10.2.0.250",
            "<span style='color: red;'>R1(config)# interface G0/0</span>",
            "R1(config)# interface G0/1"
        ]
    },
    {
        "indice": 12,
        "titulo": "Consulte la exhibición. Se configuró el R1 tal como se muestra. Sin embargo, la PC1 no puede recibir ninguna dirección IPv4. ¿Cuál es el problema?",
        "imagen": "2021-09-30_000115.jpg",
        "respuestas": [
            "Se debe instalar un servidor de DHCP en la misma LAN que el host que recibe la dirección IP.",
            "No se emitió el comando ip address dhcp en la interfaz Gi0/1.",
            "<span style='color: red;'>El comando ip helper-address se aplicó en una interfaz incorrecta.</span>",
            "No se configuró el R1 como servidor de DHCPv4."
        ]
    },
    {
        "indice": 13,
        "titulo": "Consulte la ilustración. ¿Qué se puede concluir acerca de la configuración mostrada en R1?",
        "imagen": "2021-09-30_000159.jpg",
        "respuestas": [
            "R1 está configurado como un agente de retransmisión DHCPv4.",
            "<span style='color: red;'>R1 transmitirá solicitudes DHCPv4 en nombre de clientes DHCPv4 locales.</span>",
            "R1 enviará un mensaje a un cliente DHCPv4 local para ponerse en contacto con un servidor DHCPv4 en 10.10.10.8.",
            "R1 funciona como un servidor DHCPv4."
        ]
    },
    {
        "indice": 14,
        "titulo": "¿Cuáles dos funciones son realizadas por un WLC cuando se usa el control de acceso de medios divididos (MAC)? (Escoja dos opciones).",
        "respuestas": [
            "acuses de recibo y retransmisiones de paquetes",
            "<span style='color: red;'>Traducción de tramas a otros protocolos</span>",
            "<span style='color: red;'>asociación y re-asociación de clientes itinerantes</span>",
            "señales y respuestas de sonda",
            "colas de trama y priorización de paquetes"
        ]
    },
    {
        "indice": 15,
        "titulo": "Una compañía está implementando una red inalámbrica en la instalación de distribución en la periferia de Boston. El depósito es muy grande y necesita utilizar varios puntos de acceso. Debido a que algunos de los dispositivos de la compañía aún operan a 2.4 GHz, el administrador de red decide implementar el estándar 802.11 g. ¿Qué asignación de canales en varios puntos de acceso garantizará que los canales inalámbricos no se superpongan?",
        "respuestas": [
            "Canales 2, 6 y 10",
            "<span style='color: red;'>Canales 1, 6 y 11</span>",
            "Canales 1, 5 y 9",
            "Canales 1, 7 y 13"
        ]
    },
    {
        "indice": 16,
        "titulo": "¿Qué protocolo debe deshabilitarse para ayudar a mitigar los ataques de VLAN?",
        "respuestas": [
            "CDP",
            "<span style='color: red;'>DTP</span>",
            "ARP",
            "STP"
        ]
    },
    {
        "indice": 17,
        "titulo": "Una política de seguridad de la compañía requiere que todas las direcciones MAC se aprendan y agreguen dinámicamente a la tabla de direcciones MAC y a la configuración en ejecución en cada switch. ¿Qué configuración de seguridad de puertos logrará esto?",
        "respuestas": [
            "direcciones MAC autoprotegidas",
            "direcciones MAC seguras dinámicas",
            "direcciones MAC seguras estáticas",
            "<span style='color: red;'>direcciones MAC seguras persistentes</span>"
        ]
    },
    {
        "indice": 18,
        "titulo": "¿Qué ataque de red se mitiga al habilitar la guardia BPDU?",
        "respuestas": [
            "CAM ataques de desbordamiento de tabla",
            "Servidores DHCP no fiables en una red",
            "Suplantación de dirección MAC",
            "<span style='color: red;'>Switches no fiables en una red</span>"
        ]
    },
    {
        "indice": 19.1 + " caso 1",
        "titulo": "Un nuevo switch de capa 3 está conectado a un router y se está configurando para el enrutamiento InterVLAN. ¿Cuáles son tres de los cinco pasos necesarios para la configuración? (Escoja tres opciones).",
        "respuestas": [
            "modificando la VLAN predeterminada",
            "<span style='color: red;'>habilitar el routing IP</span>",
            "<span style='color: red;'>creando interfaces SVI</span>",
            "asignando los puertos a la VLAN nativa",
            "<span style='color: red;'>asignando puertos a VLANs</span>",
            "ajustando la métrica de ruta",
            "eliminando la VLAN predeterminada"
        ]
    },
    {
        "indice": 19.2 + " caso 2",
        "titulo": "Un nuevo switch de capa 3 está conectado a un router y se está configurando para el enrutamiento InterVLAN. ¿Cuáles son tres de los cinco pasos necesarios para la configuración? (Escoja tres opciones).",
        "respuestas": [
            "<span style='color: red;'>habilitar el routing IP</span>",
            "<span style='color: red;'>ingresando «sin switchport» en el puerto conectado al router</span>",
            "ajustando la métrica de ruta",
            "instalando una ruta estática",
            "asignando los puertos a la VLAN nativa",
            "eliminando la VLAN predeterminada",
            "<span style='color: red;'>asignando puertos a VLANs</span>"
        ]
    },
    {
        "indice": 19.3 + " caso 3",
        "titulo": "Un nuevo switch de capa 3 está conectado a un router y se está configurando para el enrutamiento InterVLAN. ¿Cuáles son tres de los cinco pasos necesarios para la configuración? (Escoja tres opciones).",
        "respuestas": [
            "<span style='color: red;'>habilitar el routing IP</span>",
            "eliminando la VLAN predeterminada",
            "<span style='color: red;'>ingresando «sin switchport» en el puerto conectado al router</span>",
            "establecimiento de adyacencias",
            "<span style='color: red;'>asignar puertos a las VLAN</span>",
            "ajustando la métrica de ruta",
            "asignar los puertos a la VLAN nativa",
        ]
    },
    {
        "indice": 19.4 + " caso 4",
        "titulo": "Un nuevo switch de capa 3 está conectado a un router y se está configurando para el enrutamiento InterVLAN. ¿Cuáles son tres de los cinco pasos necesarios para la configuración? (Escoja tres opciones).",
        "respuestas": [
           "establecimiento de adyacencias",
           "instalando una ruta estática",
           "ajustando la métrica de ruta",
           "<span style='color: red;'>creando VLANs</span>",
           "<span style='color: red;'>asignando puertos a VLANs</span>",
           "<span style='color: red;'>creando interfaces SVI</span>",
           "implementar un protocolo de enrutamiento",
        ]
    },
    {
        "indice": 20,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué cambiaría el administrador las direcciones IPv4 DHCP predeterminadas en un AP?",
        "respuestas": [
            "para restringir el acceso a la WLAN solo por usuarios autorizados y autenticados",
            "para supervisar el funcionamiento de la red inalámbrica",
            "para reducir el riesgo de interferencia de dispositivos externos como hornos de microondas",
            "<span style='color: red;'>para reducir la interceptación de datos o el acceso a la red inalámbrica mediante un rango de direcciones conocido</span>"
        ]
    },
    {
        "indice": 21,
        "titulo": "¿Qué método de asignación de prefijo IPv6 se basa en el prefijo contenido en los mensajes RA?",
        "respuestas": [
            "DHCPv6 con información de estado",
            "<span style='color: red;'>SLAAC</span>",
            "estática",
            "EUI-64"
        ]
    },
    {
        "indice": 22,
        "titulo": "¿Qué prefijo IPv6 está diseñado para la comunicación local de enlace?",
        "respuestas": [
            "<span style='color: red;'>fe80::/10</span>",
            "2001: :/3",
            "fc: :/07",
            "ff00::/8"
        ]
    },
    {
        "indice": 23,
        "titulo": "¿Qué dos tipos de protocolos de árbol pueden provocar flujos de tráfico subóptimos asumen porque solamente una instancia de árbol de expansión para la red puenteada entero? (Elija dos).",
        "respuestas": [
            "<span style='color: red;'>STP</span>",
            "<span style='color: red;'>RSTP</span>",
            "PVST+ rápido",
            "PVST+",
            "MSTP"
        ]
    },
    {
        "indice": 24,
        "titulo": "Consulte la ilustración. Todos los switches que se muestran son switches Cisco 2960 con la misma prioridad predeterminada y funcionan en el mismo ancho de banda. ¿Cuáles son los tres puertos que serán los puertos designados de STP? (Elija tres).",
        "imagen": "2021-09-30_000557.jpg",
        "respuestas": [
            "fa0/20",
            "fa0/11",
            "<span style='color: red;'>fa0/21</span>",
            "<span style='color: red;'>fa0/13</span>",
            "fa0/9",
            "<span style='color: red;'>fa0/10</span>"
        ]
    },
    {
        "indice": 25,
        "titulo": "Para obtener una descripción general del estado del árbol de una red conmutada, un ingeniero de red publica el comando show spanning-tree en un switch. ¿Qué dos elementos de información este comando display? (Elija dos).",
        "respuestas": [
            "La dirección IP de la interfaz VLAN de administración.",
            "El número de broadcasts recibidos en cada puerto raíz.",
            "<span style='color: red;'>El rol de los puertos en todas las VLAN.</span>",
            "<span style='color: red;'>El BID de Root Bridge.</span>",
            "El estado de puerto de VLAN nativa."
        ]
    },
    {
        "indice": 26,
        "titulo": "Una la característica de reenvío con su tipo. (No se utilizan todas las opciones.)",
        "imagen": "2021-09-30_000658.jpg",
    },
    {
        "indice": 27,
        "titulo": "¿Qué afirmación describe un resultado después de interconectar varios switches LAN de Cisco?",
        "respuestas": [
            "Existe un dominio de colisión en el switch.",
            "<span style='color: red;'>El dominio de difusión se amplía a todos los switches.</span>",
            "Hay un dominio de difusión y un dominio de colisión por switch.",
            "Las colisiones de las tramas aumentan en los segmentos que conectan los switches."
        ]
    },
    {
        "indice": 28,
        "titulo": "¿Qué información usa un switch para completar la tabla de direcciones MAC?",
        "respuestas": [
            "la dirección MAC de origen y el puerto de salida",
            "las direcciones MAC de origen y de destino y el puerto de salida",
            "las direcciones MAC de origen y de destino y el puerto de entrada",
            "<span style='color: red;'>la dirección MAC de origen y el puerto de entrada</span>",
            "la dirección MAC de destino y el puerto de salida",
            "la dirección MAC de destino y el puerto de entrada"
        ]
    },
    {
        "indice": 29,
        "titulo": "¿Qué es un método para lanzar un ataque de salto de VLAN?",
        "respuestas": [
            "enviar direcciones IP suplantadas desde el host atacante",
            "<span style='color: red;'>Introducir un switch falso y habilitar el enlace troncal</span>",
            "enviar información de VLAN nativa suplantada",
            "inundar el switch con direcciones MAC"
        ]
    },
    {
        "indice": 30,
        "titulo": "Durante el proceso de AAA, ¿cuándo se implementará la autorización?",
        "respuestas": [
            "Inmediatamente después de que se reciben informes detallados en el paso de registro de AAA",
            "Inmediatamente después de que un cliente AAA envía información de autenticación a un servidor centralizado",
            "Inmediatamente después de la determinación de los recursos a los que puede acceder un usuario",
            "<span style='color: red;'>Inmediatamente después de la correcta autenticación en relación con una fuente de datos de AAA</span>"
        ]
    },
    {
        "indice": 31,
        "titulo": "¿Qué protocolo o tecnología desactiva las rutas redundantes para eliminar los bucles de capa 2?",
        "respuestas": [
            "EtherChannel",
            "VTP",
            "<span style='color: red;'>STP</span>",
            "DTP"
        ]
    },
    {
        "indice": 32,
        "titulo": "Consulte la ilustración. ¿Qué ruta se configuró como ruta estática en una red específica con la dirección del próximo salto?",
        "imagen": "2021-09-30_001028.jpg",
        "respuestas": [
            "C 10.16.2.0/24 is directly connected, Serial0/0/0",
            "<span style='color: red;'>S 10.17.2.0/24 [1/0] via 10.16.2.2</span>",
            "S 10.17.2.0/24 está directamente conectada, Serial 0/0/0",
            "S 0.0.0.0/0 [1/0] via 10.16.2.2"
        ]
    },
    {
        "indice": 33,
        "titulo": "¿De qué manera cambia la forma en que un router administra el routing estático si se inhabilita Cisco Express Forwarding?",
        "respuestas": [
            "<span style='color: red;'>Las interfaces Ethernet de accesos múltiples requieren rutas estáticas especificadas completamente para evitar incoherencias de routing.</span>",
            "No se necesitan las rutas estáticas que utilizan una interfaz de salida.",
            "No realiza búsquedas recursivas.",
            "Las interfaces seriales punto a punto requieren rutas estáticas especificadas completamente para evitar incoherencias de routing."
        ]
    },
    {
        "indice": 34,
        "titulo": "Consulte la ilustración. El router R1 tiene una relación de vecino OSPF con el router ISP a través de la red 192.168.0.32. El enlace de red 192.168.0.36 debe funcionar como respaldo cuando deja de funcionar el enlace OSPF. Se emitió el comando de ruta estática flotante ip route 0.0.0.0 0.0.0.0 S0/0/1 100 en el R1, y ahora el tráfico usa el enlace de respaldo, aun cuando el enlace OSPF está activo y en funcionamiento. ¿Qué modificaciones se deben realizar al comando de ruta estática a fin de que el tráfico use solo el enlace OSPF cuando este se encuentre activo?",
        "imagen": "2021-09-30_001113.jpg",
        "respuestas": [
            "Cambiar la red de destino a 192.168.0.34.",
            "Agregar la dirección de vecino de siguiente salto 192.168.0.36.",
            "<span style='color: red;'>Cambiar la distancia administrativa a 120.</span>",
            "Cambiar la distancia administrativa a 1."
        ]
    },
    {
        "indice": 35,
        "titulo": "En una página Resumen del WLC 3504 de Cisco ( Avanzado > Resumen ), ¿qué pestaña permite a un administrador de red configurar una WLAN determinada con una directiva WPA2?",
        "respuestas": [
            "SEGURIDAD",
            "INALÁMBRICO",
            "ADMINISTRACIÓN",
            "<span style='color: red;'>Redes de área local inalámbrica (WLAN)</span>"
        ]
    },
    {
        "indice": 36,
        "titulo": "¿Cuál es el término común que se da a los mensajes de registro SNMP generados por dispositivos de red y enviados al servidor SNMP?",
        "respuestas": [
            "Auditoría",
            "<span style='color: red;'>trampas</span>",
            "Acuses de recibo",
            "advertencias"
        ]
    },
    {
        "indice": 37,
        "titulo": "Un administrador de red de una pequeña empresa publicitaria está configurando la seguridad WLAN mediante el método PSK WPA2. ¿Qué credenciales necesitan los usuarios de oficina para conectar sus portátiles a la WLAN?",
        "respuestas": [
            "el nombre de usuario y la contraseña de la empresa a través del servicio Active Directory",
            "una clave que coincida con la clave en el AP",
            "un nombre de usuario y contraseña configurados en el AP",
            "<span style='color: red;'>una frase de contraseña de usuario</span>"
        ]
    },
    {
        "indice": 38,
        "titulo": "¿Qué tipo de ruta estática se configura con una mayor distancia administrativa a fin de proporcionar una ruta de respaldo a una ruta descubierta por un protocolo de routing dinámico?",
        "respuestas": [
            "<span style='color: red;'>Ruta estática flotante</span>",
            "Ruta estática estándar",
            "Ruta estática predeterminada",
            "Ruta estática resumida"
        ]
    },
    {
        "indice": 39,
        "titulo": "Consulte la ilustración. El R1 se configuró con el comando de ruta estática ip route 209.165.200.224 255.255.255.224 S0/0/0 y, en consecuencia, los usuarios en la red 172.16.0.0/16 no pueden acceder a los recursos de Internet. ¿Cómo se debe modificar esta ruta estática para permitir que el tráfico de usuarios de la LAN llegue a Internet?",
        "imagen": "2021-09-30_001223.jpg",
        "respuestas": [
            "Agregar la dirección de vecino de siguiente salto 209.165.200.226.",
            "Cambiar la interfaz de salida a S0/0/1.",
            "Agregar una distancia administrativa de 254.",
            "<span style='color: red;'>Cambiar la red y la máscara de destino a 0.0.0.0 0.0.0.0.</span>"
        ]
    },
    {
        "indice": 40,
        "titulo": "Consulte la ilustración. El router R1 actualmente utiliza una ruta de EIGRP obtenida de la Sucursal2 para acceder a la red 10.10.0.0/16. ¿Qué ruta estática flotante creará una ruta de respaldo a la red 10.10.0.0/16 en caso de que el enlace entre el R1 y la Sucursal2 deje de funcionar?",
        "imagen": "2021-09-30_001259.jpg",
        "respuestas": [
            "ip route 10.10.0.0 255.255.0.0 Serial 0/0/0 100",
            "ip route 10.10.0.0 255.255.0.0 209.165.200.226 100",
            "<span style='color: red;'>ip route 10.10.0.0 255.255.0.0 209.165.200.225 100</span>",
            "ip route 10.10.0.0 255.255.0.0 209.165.200.225 50"
        ]
    },
    {
        "indice": 41,
        "titulo": "¿Qué comando crea una ruta estática en el R2 para llegar a la PC B?",
        "imagen": "2021-09-30_001333.jpg",
        "respuestas": [
            "R2(config)# ip route 172.16.2.1 255.255.255.0 172.16.3.1",
            "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.2.254",
            "R2(config)# ip route 172.16.3.0 255.255.255.0 172.16.2.254",
            "<span style='color: red;'>R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1</span>"
        ]
    },
    {
        "indice": 42,
        "titulo": "Consulte la ilustración. ¿Cuáles de las siguientes son tres conclusiones que se pueden extraer a partir del resultado que se muestra? (Elija dos).",
        "imagen": "2021-09-30_001413.jpg",
        "respuestas": [
            "El canal de puerto es un canal de capa 3.",
            "El método de equilibrio de carga es usado puerto de origen al puerto de destino.",
            "<span style='color: red;'>El canal de puerto ID es 2.</span>",
            "<span style='color: red;'>El grupo EtherChannel no funciona.</span>",
            "La red funciona a la perfección."
        ]
    },
    {
        "indice": 43,
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuración ip dhcp snooping en un switch?",
        "respuestas": [
            "Habilita PortFast globalmente en un switch.",
            "Habilita manualmente un enlace troncal.",
            "<span style='color: red;'>Habilita el DHCP snooping globalmente en un Switch.</span>",
            "Inhabilita las negociaciones de DTP en los puertos de enlace troncal."
        ]
    },
    {
        "indice": 44,
        "titulo": "Consulte la exhibición. ¿Qué dirección MAC de destino se utiliza cuando las tramas se envían de la estación de trabajo al gateway predeterminado?",
        "imagen": "2021-09-30_001502.jpg",
        "respuestas": [
            "La dirección MAC del router de reenvío",
            "La dirección MAC del router de reserva",
            "<span style='color: red;'>La dirección MAC del router virtual</span>",
            "Las direcciones MAC de los routers de reenvío y de reserva"
        ]
    },
    {
        "indice": 45,
        "titulo": "¿Cuáles son tres técnicas de mitigación de ataques de VLAN? (Elija tres opciones.)",
        "respuestas": [
            "Habilitar la protección de origen.",
            "Usar VLAN privadas.",
            "<span style='color: red;'>Habilitar manualmente los enlaces troncales.</span>",
            "<span style='color: red;'>Desactivar el DTP.</span>",
            "<span style='color: red;'>Configurar la VLAN nativa en una VLAN sin usar.</span>",
            "Habilitar la protección BPDU."
        ]
    },
    {
        "indice": 46,
        "titulo": "Consulte la exhibición. Además de las rutas estáticas que direccionan el tráfico a las redes 10.10.0.0/16 y 10.20.0.0/16, el router HQ también está configurado con el siguiente comando:",
        "imagen": "2021-09-30_001558.jpg",
        "respuestas": [
            "Los paquetes de la red 10.10.0.0/16 serán reenviados a la red 10.20.0.0/16 y los paquetes de la red 10.20.0.0/16 serán reenviados a la red 10.10.0.0/16.",
            "<span style='color: red;'>Los paquetes con una red de destino que no sea 10.10.0.0/16 ni 10.20.0.0/16 ni una red conectada directamente serán reenviados a Internet.</span>",
            "Los paquetes que se reciben de Internet serán reenviados a una de las LAN conectadas al R1 o al R2.",
            "Los paquetes destinados a las redes que no están en la tabla de routing del HQ serán descartados."
        ]
    },
    {
        "indice": 47,
        "titulo": "¿Qué método de cifrado inalámbrico es la manera más segura?",
        "respuestas": [
            "WEP",
            "WPA",
            "<span style='color: red;'>WPA2 con AES</span>",
            "WPA2 con TKIP"
        ]
    },
    {
        "indice": 48,
        "titulo": "Consulte la ilustración. Un administrador de red ha conectado dos switches juntos con la tecnología EtherChannel. Si STP se está ejecutando, ¿cuál será el resultado final?",
        "imagen": "2021-09-30_001654.jpg",
        "respuestas": [
            "El bucle resultante creará una difusión excesiva.",
            "<span style='color: red;'>El STP bloqueará uno de los enlaces redundantes.</span>",
            "Los switches equilibrarán la carga y utilizarán ambos EtherChannels para enviar paquetes.",
            "Ambos canales de puertos se desconectarán."
        ]
    },
    {
        "indice": 49,
        "titulo": "Consulte la ilustración. ¿Qué ruta estática introduciría un técnico de TI para crear una ruta de respaldo a la red 172.16.1.0 que solo se utiliza si la ruta principal aprendida a través de RIP falla?",
        "imagen": "2021-09-30_001729.jpg",
        "respuestas": [
            "ip route 172.16.1.0 255.255.255.0 s0/0/0 91",
            "<span style='color: red;'>ip route 172.16.1.0 255.255.255.0 s0/0/0 121</span>",
            "ip route 172.16.1.0 255.255.255.0 s0/0/0 111",
            "ip route 172.16.1.0 255.255.255.0 s0/0/0"
        ]
    },
    {
        "indice": 50,
        "titulo": "Después de conectar cuatro PC a los puertos del switch, configurar el SSID y establecer las propiedades de autenticación para una red de oficina pequeña, un técnico prueba correctamente la conectividad de todos los PC conectados al switch y a la WLAN. A continuación, se configura un firewall en el dispositivo antes de conectarlo a Internet. ¿Qué tipo de dispositivo de red incluye todas las características descritas?",
        "respuestas": [
            "<span style='color: red;'>Router inalámbrico</span>",
            "dispositivo de firewall",
            "switch",
            "punto de acceso inalámbrico independiente"
        ]
    },
    {
        "indice": 51,
        "titulo": "Un administrador intenta eliminar configuraciones de un switch. Luego de usar el comando erase startup-config y de volver a cargar el switch, el administrador advierte que aún existen las VLAN 10 y 100 en el switch. ¿Por qué no se eliminaron estas VLAN?",
        "respuestas": [
            "Estas VLAN son VLAN predeterminadas que no se pueden eliminar.",
            "Estas VLAN no se pueden eliminar a menos que el switch esté en modo de cliente VTP.",
            "Estas VLAN solo se pueden eliminar del switch mediante el uso de los comandos no vlan 10 y no vlan 100 .",
            "<span style='color: red;'>Porque estas VLAN se almacenan en un archivo denominado vlan.dat que está ubicado en la memoria flash y se debe eliminar de forma manual.</span>"
        ]
    },
    {
        "indice": 52,
        "titulo": "Consulte la ilustración. ¿Cuáles son los posibles roles de puerto para los puertos A, B, C y D en esta red con el protocolo RSTP habilitado?",
        "imagen": "2021-09-30_001829.jpg",
        "respuestas": [
            "Designado, raíz, alternativo, raíz",
            "<span style='color: red;'>Alternativo, designado, raíz, raíz</span>",
            "Designado, alternativo, raíz, raíz",
            "Alternativo, raíz, designado, raíz"
        ]
    },
    {
        "indice": 53,
        "titulo": "¿Cuál es una opción de configuración segura para el acceso remoto a un dispositivo de red?",
        "respuestas": [
            "Configurar Telnet.",
            "Configurar una ACL y aplicarla a las líneas VTY.",
            "Configurar 802.1x.",
            "<span style='color: red;'>Configurar SSH.</span>"
        ]
    },
    {
        "indice": 54,
        "titulo": "Una el estado de enlace con el estado de la interfaz y el protocolo. (No se utilizan todas las opciones.)",
        "imagen": "2021-09-30_001949.jpg",
    },
    {
        "indice": 55,
        "titulo": "Consulte la ilustración. El host A envió un paquete al host B. ¿Cuáles serán las direcciones MAC e IP de origen en el paquete cuando este llegue al host B?",
        "imagen": "2021-09-30_002059.jpg",
        "respuestas": [
            "<span>MAC de origen: 00E0.FE91.7799 <br> IP de origen: 10.1.1.1</span>",
            "<span style='color: red;'>MAC de origen: 00E0.FE91.7799 <br> IP de origen: 10.1.1.10</span>",
            "<span>MAC de origen: 00E0.FE91.7799 <br> IP de origen: 192.168.1.1</span>",
            "<span>MAC de origen: 00E0.FE10.17A3 <br> IP de origen: 10.1.1.10</span>",
            "<span>MAC de origen: 00E0.FE10.17A3 <br> IP de origen: 192.168.1.1</span>",
        ]
    },
    {
        "indice": 56,
        "titulo": "Una la descripción el tipo de VLAN correcto. (No se utilizan todas las opciones.)",
        "imagen": "2021-09-30_002132.jpg",
    },
    {
        "indice": 57,
        "titulo": "Consulte la exhibición. Un administrador de red configura el routing entre VLAN en una red. De momento, solo se usa una VLAN, pero pronto se agregarán más. ¿Cuál es el parámetro que falta y que se muestra como signo de interrogación destacado en el gráfico?",
        "imagen": "2021-09-30_002237.jpg",
        "respuestas": [
            "El que identifica el número de VLAN nativa.",
            "El que identifica el tipo de encapsulación que se utiliza.",
            "<span style='color: red;'>El que identifica el número de VLAN.</span>",
            "El que identifica la cantidad de hosts que se permiten en la interfaz.",
            "El que identifica la subinterfaz."
        ]
    },
    {
        "indice": 58,
        "titulo": "Consulte la exhibición. ¿Cómo se reenvía una trama desde la PCA hacia la PCC si la tabla de direcciones MAC en el switch SW1 está vacía?",
        "imagen": "2021-09-30_002315.jpg",
        "respuestas": [
            "<span style='color: red;'>SW1 satura todos los puertos en SW1 con la trama, a excepción del puerto a través del cual la trama ingresó al switch.</span>",
            "SW1 descarta la trama porque no conoce el destino de la dirección MAC.",
            "SW1 reenvía la trama directamente a SW2. SW2 satura todos los puertos conectados a SW2 con la trama, a excepción del puerto a través del cual la trama ingresó al switch.",
            "SW1 satura todos los puertos en el switch con la trama, a excepción del puerto interconectado al switch SW2 y el puerto a través del cual la trama ingresó al switch."
        ]
    },
    {
        "indice": 59,
        "titulo": "Una los tipos de mensaje DHCP con el orden del proceso de DHCPv4. (No se utilizan todas las opciones).",
        "imagen": "2021-09-30_002352.jpg",
    },
    {
        "indice": 60,
        "titulo": "Después de que un host ha generado una dirección IPv6 usando el proceso de DHCPv6 o SLAAC, como puede el host verificar que la dirección es única y por lo tanto utilizable?",
        "respuestas": [
            "El host envía un mensaje de solicitud echo de ICMPv6 a la dirección aprendida por DHCPv6 o SLAAC y si no reciba respuesta, la direccion se considera unica.",
            "El host envía una difusión de ARP al enlace local y si ningún host responde, la direccion es considerada unica.",
            "El host revisa el caché del vecino local buscando la direccion aprendida y si la direccion no está en el caché, es considerada unica.",
            "<span style='color: red;'>El host envía un mensaje de solicitud de vecino ICMPv6 a la dirección aprendida por DHCPv6 o SLAAC y si no recibe anuncio de vecino de vuelta , la direccion se considera unica.</span>"
        ]
    },
    {
        "indice": 61,
        "titulo": "¿Qué acción se lleva a cabo cuando la dirección MAC de origen de una trama que ingresa a un switch no está en la tabla de direcciones MAC?",
        "respuestas": [
            "El switch reemplaza la entrada anterior y usa el puerto más actual.",
            "<span style='color: red;'>El switch agrega la dirección MAC y el número de puerto entrante a la tabla.</span>",
            "El switch agrega una entrada de tabla de direcciones MAC para la dirección MAC de destino y el puerto de salida.",
            "El switch actualiza el temporizador de actualización para la entrada."
        ]
    },
    {
        "indice": 62,
        "titulo": "Un técnico está solucionando problemas con una WLAN lenta y decide utilizar el enfoque de división del tráfico. ¿Qué dos parámetros tendrían que configurarse para hacer esto? (Escoja dos opciones).",
        "respuestas": [
            "<span style='color: red;'>Configure la banda de 2.4 GHz para el tráfico básico de Internet que no es sensible al tiempo.</span>",
            "Configure un SSID común para ambas redes divididas.",
            "Configure el modo de seguridad en WPA Personal TKIP/AES para una red y WPA2 Personal AES para la otra red.",
            "Configure el modo de seguridad en WPA Personal TKIP/AES para ambas redes.",
            "<span style='color: red;'>Configure la banda de 5 GHz para transmitir contenido multimedia y tráfico sensible al tiempo.</span>"
        ]
    },
    {
        "indice": 63,
        "titulo": "Un administrador de red está agregando una nueva WLAN en un WLC de la serie 3500 de Cisco. ¿Qué pestaña debe usar el administrador para crear una nueva interfaz VLAN que se utilizará para la nueva WLAN?",
        "respuestas": [
            "ADMINISTRACIÓN",
            "<span style='color: red;'>CONTROLADOR</span>",
            "Redes de área local inalámbrica (WLAN)",
            "INALÁMBRICO"
        ]
    },
    {
        "indice": 64,
        "titulo": "¿Qué dos configuraciones de router inalámbrico predeterminadas pueden afectar la seguridad de la red? (Elija dos opciones).",
        "imagen": "2021-09-30_161948.jpg",
        "respuestas": [
            "<span style='color: red;'>Se difunde el SSID.</span>",
            "Se habilita el filtrado de direcciones MAC.",
            "Se habilita el cifrado WEP.",
            "Se selecciona automáticamente el canal inalámbrico.",
            "<span style='color: red;'>Se configura una contraseña de administrador ampliamente conocida.</span>"
        ]
    },
    {
        "indice": 65,
        "titulo": "En comparación con las rutas dinámicas, ¿cuáles son las dos ventajas de utilizar rutas estáticas en un router? (Elija dos opciones.)",
        "respuestas": [
            "Tardan menos tiempo para converger cuando la topología de la red cambia.",
            "<span style='color: red;'>Mejoran la seguridad de la red.</span>",
            "Mejoran la eficiencia de detección de redes vecinas.",
            "Cambian de forma automática la ruta hacia la red de destino cuando la topología cambia.",
            "<span style='color: red;'>Utilizan menos recursos del router.</span>"
        ]
    },
    {
        "indice": 66,
        "titulo": "Consulte la exhibición. ¿Cuál es la métrica para reenviar un paquete de datos con la dirección de destino IPv6 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?",
        "imagen": "2021-09-30_163756.jpg",
        "respuestas": [
            "90",
            "128",
            "2170112",
            "2681856",
            "<span style='color: red;'>2682112</span>",
            "3193856"
        ]
    },
    {
        "indice": 67,
        "titulo": "¿Qué protocolo o tecnología es un protocolo propietario de Cisco que se habilita automáticamente en switches 2960?",
        "respuestas": [
            "<span style='color: red;'>DTP</span>",
            "VTP",
            "EtherChannel",
            "STP"
        ]
    },
    {
        "indice": 68,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador usaría un controlador WLAN?",
        "respuestas": [
            "para proporcionar un servicio priorizado para aplicaciones sensibles al tiempo",
            "para reducir el riesgo de que se añadan AP no autorizados a la red",
            "<span style='color: red;'>para facilitar la configuración de grupos y la administración de varias WLAN a través de un WLC</span>",
            "para centralizar la administración de varias WLAN"
        ]
    },
    {
        "indice": 69,
        "titulo": "Consulte la exhibición. Un ingeniero de red está configurando un routing IPv6 en la red. ¿Qué comando emitido en el router HQ configurará una ruta predeterminada a Internet para reenviar paquetes a una red de destino IPv6 que no se enumera en la tabla de routing?",
        "imagen": "2021-09-30_163910.jpg",
        "respuestas": [
            "ip route 0.0.0.0 0.0.0.0 serial 0/1/1",
            "ipv6 route ::1/0 serial 0/1/1",
            "ipv6 route ::/0 serial 0/0/0",
            "<span style='color: red;'>ipv6 route ::/0 serial 0/1/1</span>"
        ]
    },
    {
        "indice": 70,
        "titulo": "Un administrador de red ha encontrado a un usuario que envía una trama 802.1Q de doble etiqueta a un switch. ¿Cuál es la mejor solución para prevenir este tipo de ataque?",
        "respuestas": [
            "El número de VLAN nativo utilizado en cualquier tronco debe ser una de las VLAN de datos activas.",
            "Los puertos troncal deben configurarse con la seguridad del puerto.",
            "Los puertos troncal deben utilizar la VLAN predeterminada como número de VLAN nativo.",
            "<span style='color: red;'>Las VLAN para los puertos de acceso de usuario deben ser distintas de las VLAN nativas utilizadas en los puertos troncal.</span>"
        ]
    },
    {
        "indice": 71,
        "titulo": "Consulte la ilustración. El administrador de red está configurando la función de seguridad del puerto en el switch SWC. El administrador emitió el comando show port-security interface fa 0/2 para verificar la configuración. ¿Qué se puede concluir a partir de la salida que se muestra? (Escoja tres opciones).",
        "imagen": "2021-09-30_164009.jpg",
        "respuestas": [
            "Se han detectado tres violaciones de seguridad en esta interfaz.",
            "Actualmente no hay ningún dispositivo conectado a este puerto.",
            "<span style='color: red;'>Las infracciones de seguridad harán que este puerto se cierre inmediatamente.</span>",
            "El puerto se configura como un enlace troncal.",
            "<span style='color: red;'>Este puerto está activo actualmente.</span>",
            "<span style='color: red;'>El modo de puerto del switch para esta interfaz es el modo de acceso.</span>"
        ]
    },
    {
        "indice": 72,
        "titulo": "¿Cuáles son las dos afirmaciones que describen características de los puertos enrutados en un switch multicapa? (Elija dos opciones).",
        "respuestas": [
            "Se debe introducir el comando interface vlan <número de vlan> para crear una VLAN en los puertos enrutados.",
            "Se usan para los enlaces de punto a multipunto.",
            "<span style='color: red;'>En una red conmutada, se configuran principalmente entre los switches de las capas núcleo y de distribución.</span>",
            "Admiten subinterfaces, como las interfaces en los routers Cisco IOS.",
            "<span style='color: red;'>No se asocian a una VLAN determinada.</span>"
        ]
    },
    {
        "indice": 73,
        "titulo": "Un administrador de red utiliza el modelo de router-on-a-stick para configurar un switch y un router para el routing entre VLAN. ¿Qué configuración se debe aplicar al puerto del switch que se conecta al router?",
        "respuestas": [
            "Configurarlo como puerto de enlace troncal y permitir únicamente el tráfico sin etiquetas.",
            "Configurar el puerto como puerto de enlace troncal y asignarlo a la VLAN1.",
            "Configurar el puerto como puerto de acceso y como miembro de la VLAN1.",
            "<span style='color: red;'>Configurar el puerto como puerto de enlace troncal 802.1q.</span>"
        ]
    },
    {
        "indice": 74,
        "titulo": "¿Cuál es el prefijo IPv6 que se utiliza para direcciones de enlace local?",
        "respuestas": [
            "<span style='color: red;'>FE80::/10</span>",
            "FC00::/7",
            "2001::/3",
            "FF01::/8"
        ]
    },
    {
        "indice": 75,
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuración ip dhcp snooping limit rate 6 en un switch?",
        "respuestas": [
            "Aprende dinámicamente la dirección L2 y la copia en la configuración en ejecución.",
            "<span style='color: red;'>Restringe el número de mensajes de detección, por segundo, que se recibirán en la interfaz.</span>",
            "Muestra las asociaciones de direcciones IP a Mac para interfaces de switch.",
            "Habilita globalmente la seguridad de puerto en el switch."
        ]
    },
    {
        "indice": 76,
        "titulo": "¿Qué acción realiza un cliente DHCPv4 si recibe más de un DHCPOFFER de varios servidores DHCP?",
        "respuestas": [
            "Descarta ambas ofertas y envía un nuevo DHCPDISCOVER.",
            "Envía un DHCPNAK y vuelve a iniciar el proceso DHCP.",
            "<span style='color: red;'>Envía un DHCPREQUEST que identifica qué oferta de arrendamiento está aceptando el cliente.</span>",
            "Acepta tanto mensajes DHCPOFFER y envía un DHCPACK."
        ]
    },
    {
        "indice": 77,
        "titulo": "Consulte la ilustración. ¿Qué enlace troncal no enviará tráfico después de que el proceso de elección de puente raíz se complete?",
        "imagen": "2021-09-30_164211.jpg",
        "respuestas": [
            "Enlace troncal1",
            "<span style='color: red;'>Enlace troncal2</span>",
            "Enlace troncal3",
            "Enlace troncal4"
        ]
    },
    {
        "indice": 78,
        "titulo": "Un ingeniero WLAN implementa un WLC y cinco puntos de acceso inalámbricos utilizando el protocolo CAPWAP con la función DTLS para asegurar el plano de control de los dispositivos de red. Durante la prueba de la red inalámbrica, el ingeniero de WLAN nota que el tráfico de datos se está intercambiando entre el WLC y los AP en texto sin formato y no se está cifrando. ¿Cuál es la razón más probable para esto?",
        "respuestas": [
            "DTLS sólo proporciona seguridad de datos mediante autenticación y no proporciona cifrado para los datos que se mueven entre un hub LAN inalámbrico (WLC) y un punto de acceso (AP).",
            "<span style='color: red;'>Aunque DTLS está habilitado de manera predeterminada para asegurar el canal de control CAPWAP, está deshabilitado de manera predeterminada para el canal de datos.</span>",
            "El cifrado de datos requiere la instalación de una licencia DTLS en cada punto de acceso (AP) antes de habilitarse en el hub de LAN inalámbrica (WLC).",
            "DTLS es un protocolo que sólo proporciona seguridad entre el punto de acceso (AP) y el cliente inalámbrico."
        ]
    },
    {
        "indice": 79,
        "titulo": "¿Qué método de autenticación inalámbrica depende de un servidor de autenticación RADIUS?",
        "respuestas": [
            "<span style='color: red;'>WPA2 comercial</span>",
            "WPA Personal",
            "WPA2 Personal",
            "WEP"
        ]
    },
    {
        "indice": 80,
        "titulo": "¿Cuáles son los dos modos VTP que permiten la creación, modificación y eliminación de las VLAN en el switch local? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>Transparente</span>",
            "Distribución",
            "Cliente",
            "Maestro",
            "Esclavo",
            "<span style='color: red;'>Servidor</span>"
        ]
    },
    {
        "indice": 81,
        "titulo": "Consulte la ilustración. ¿Qué hosts recibirán solicitudes de ARP desde el host A, considerando que el puerto Fa0/4 en ambos switches está configurado para llevar tráfico a varias VLAN? (Elija tres opciones.)",
        "imagen": "2021-09-30_164307.jpg",
        "respuestas": [
            "host B",
            "<span style='color: red;'>host D</span>",
            "host E",
            "<span style='color: red;'>host C</span>",
            "<span style='color: red;'>host F</span>",
            "host G"
        ]
    },
    {
        "indice": 82,
        "titulo": "¿Cuál sería el motivo principal por el que un atacante podría lanzar un ataque de sobrecarga de la dirección MAC?",
        "respuestas": [
            "Para que los hosts legítimos no puedan obtener una dirección MAC",
            "Para que el atacante pueda ejecutar un código arbitrario en el switch",
            "Para que el switch deje de enviar tráfico",
            "<span style='color: red;'>Para que el atacante pueda ver las tramas con destino a otros hosts</span>"
        ]
    },
    {
        "indice": 83,
        "titulo": "Un analista de ciberseguridad está utilizando la herramienta macof para evaluar configuraciones de switches implementados en la red troncal de una organización. ¿A qué tipo de ataque LAN se dirige el analista durante esta evaluación?",
        "respuestas": [
            "Salto de VLAN",
            "Suplantación de identidad de DHCP",
            "VLAN double-tagging",
            "<span style='color: red;'>Desbordamiento de tabla de direcciones MAC</span>"
        ]
    },
    {
        "indice": 84,
        "titulo": "¿Qué declaración es correcta acerca de cómo un switch de Capa 2 determina cómo reenviar fotogramas?",
        "respuestas": [
            "Solo las tramas con una dirección de destino de difusión se reenvían a todos los puertos del switch activos.",
            "Las tramas de unidifusión siempre se reenvían, independientemente de la dirección de destino MAC.",
            "El reenvío de tramas por método de corte garantiza que siempre se descarten las tramas no válidas.",
            "<span style='color: red;'>Las decisiones de reenvío de tramas se basan en la asignación de puertos y la dirección MAC en la tabla CAM</span>"
        ]
    },
    {
        "indice": 85,
        "titulo": "¿Qué tres estándares de Wi-Fi funcionan en el rango de frecuencias 2.4 GHz? (Elija tres).",
        "respuestas": [
            "802.11a",
            "<span style='color: red;'>802.11g</span>",
            "802.11ac",
            "<span style='color: red;'>802.11b</span>",
            "<span style='color: red;'>802.11n</span>"
        ]
    },
    {
        "indice": 86,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador usaría varios AP ligeros?",
        "respuestas": [
            "para proporcionar un servicio priorizado para aplicaciones sensibles al tiempo",
            "<span style='color: red;'>para facilitar la configuración de grupos y la administración de varias WLAN a través de un WLC</span>",
            "para centralizar la administración de varias WLAN",
            "para supervisar el funcionamiento de la red inalámbrica"
        ]
    },
    {
        "indice": 87,
        "titulo": "Un administrador de redes configura un nuevo switch de Cisco para el acceso de administración remota. ¿Qué tres elementos se deben configurar en el switch para realizar esta tarea? (Elija tres opciones.)",
        "respuestas": [
            "VLAN predeterminada",
            "<span style='color: red;'>Líneas vty</span>",
            "Dominio VTP",
            "<span style='color: red;'>Gateway predeterminado</span>",
            "Dirección de loopback",
            "<span style='color: red;'>Dirección IP</span>"
        ]
    },
    {
        "indice": 88,
        "titulo": "Consulte la exhibición. Después de intentar introducir la configuración que se muestra en el router RTA, un administrador recibe un error, y los usuarios en la VLAN 20 informan que no pueden llegar a los usuarios en la VLAN 30. ¿Qué está causando el problema?",
        "imagen": "2021-09-30_214742.jpg",
        "respuestas": [
            "Dot1q no admite subinterfaces.",
            "<span style='color: red;'>RTA usa la misma subred para la VLAN 20 y la VLAN 30.</span>",
            "Fa0/0 no tiene ninguna dirección para usar como gateway predeterminado.",
            "Se debería haber emitido el comando no shutdown en Fa0/0.20 y Fa0/0.30."
        ]
    },
    {
        "indice": 89,
        "titulo": "Un administrador de red ha configurado un router para la operación DHCPv6 sin estado. Sin embargo, los usuarios informan de que las estaciones de trabajo no reciben información del servidor DNS. ¿Qué dos líneas de configuración del router deben verificarse para garantizar que el servicio DHCPv6 sin estado esté configurado correctamente? (Escoja dos opciones).",
        "respuestas": [
            "<span style='color: red;'>La línea dns-server se incluye en la sección ipv6 dhcp pool .</span>",
            "<span style='color: red;'>Se introduce el indicador ipv6 nd other-config-flag para la interfaz que se enfrenta al segmento LAN.</span>",
            "La línea de prefijo de dirección se incluye en la sección de pool ipv6 dhcp .",
            "La línea de nombre de dominio se incluye en la sección ipv6 dhcp pool .",
            "Se introduce el indicador ipv6 nd managed-config-flag para la interfaz que se enfrenta al segmento LAN."
        ]
    },
    {
        "indice": 90,
        "titulo": "Un administrador de redes configura la función de seguridad de puertos en un switch. La política de seguridad especifica que cada puerto de acceso debe permitir hasta dos direcciones MAC. Cuando se alcanza al número máximo de direcciones MAC, se descarta una trama con la dirección MAC de origen desconocida y se envía una notificación al servidor de syslog. ¿Qué modo de violación de seguridad se debe configurar para cada puerto de acceso?",
        "respuestas": [
            "protect",
            "shutdown",
            "<span style='color: red;'>restrict</span>",
            "warning"
        ]
    },
    {
        "indice": 91,
        "titulo": "Un administrador de red utiliza el comando de configuración global predeterminado portfast bpduguard del árbol de expansión para habilitar la protección BPDU en un switch. Sin embargo, la protección BPDU no está activada en todos los puertos de acceso. ¿Cuál es la causa del problema?",
        "respuestas": [
            "Los puertos de acceso pertenecen a diferentes VLAN.",
            "<span style='color: red;'>PortFast no está configurado en todos los puertos de acceso.</span>",
            "La protección BPDU debe activarse en el modo de comando de configuración de interfaz.",
            "Los puertos de acceso configurados con protección raíz no se pueden configurar con protección BPDU."
        ]
    },
    {
        "indice": 91,
        "titulo": "Un administrador de red utiliza }el comando de configuración global predeterminado portfast bpduguard del árbol de expansión para habilitar la protección BPDU en un switch. Sin embargo, la protección BPDU no está activada en todos los puertos de acceso. ¿Cuál es la causa del problema?",
        "respuestas": [
            "Los puertos de acceso pertenecen a diferentes VLAN.",
            "<span style='color: red;'>PortFast no está configurado en todos los puertos de acceso.</span>",
            "La protección BPDU debe activarse en el modo de comando de configuración de interfaz.",
            "Los puertos de acceso configurados con protección raíz no se pueden configurar con protección BPDU."
        ]
    },
    {
        "indice": 92,
        "titulo": "¿Cuáles son los dos protocolos que se usan para proporcionar autenticación de AAA basada en servidor? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>Basado en MAC</span>",
            "802.1x",
            "SSH",
            "<span style='color: red;'>TACACS+</span>",
            "SNMP"
        ]
    },
    {
        "indice": 93,
        "titulo": "¿Qué ataque a la red intenta crear un DoS para los clientes al evitar que obtengan un arrendamiento de DHCP?",
        "respuestas": [
            "Ataque de tabla CAM",
            "Suplantación de dirección IP",
            "Suplantación de identidad de DHCP",
            "<span style='color: red;'>Inanición DHCP</span>"
        ]
    },
    {
        "indice": 94,
        "titulo": "Un administrador de red está preparando la implementación PVST+ rápido en una red de producción. ¿Cómo determinan los tipos de links rápidos PVST+ en las interfaces del switch?",
        "respuestas": [
            "Los tipos de links deben configurarse con los comandos de configuración de puertos específicos.",
            "<span style='color: red;'>Determinan los tipos de link automáticamente.</span>",
            "Los tipos de links pueden ser determinados sólo si se ha configurado portfast.",
            "Los tipos de links se pueden configurar solamente en los puertos de acceso configurados con una sola VLAN."
        ]
    },
    {
        "indice": 95,
        "titulo": "¿Cuáles de los siguientes son dos motivos para que un administrador de red divida una red con un switch de capa 2? (Elija dos).",
        "respuestas": [
            "<span style='color: red;'>Para aumentar el ancho de banda de usuario.</span>",
            "Para crear menos dominios de colisiones.",
            "Para crear más dominios de difusión.",
            "Para eliminar circuitos virtuales.",
            "<span style='color: red;'>Para aislar el tráfico entre segmentos.</span>",
            "Para aislar los mensajes de solicitud de ARP del resto de la red."
        ]
    },
    {
        "indice": 96,
        "titulo": "¿Qué acción se lleva a cabo cuando una trama que ingresa a un switch tiene una dirección MAC de destino de unidifusión que aparece en la tabla de direcciones MAC?",
        "respuestas": [
            "El switch actualiza el temporizador de actualización para la entrada.",
            "El switch purga toda la tabla de direcciones MAC.",
            "El switch reemplaza la entrada anterior y usa el puerto más actual.",
            "<span style='color: red;'>El switch reenvía la trama fuera del puerto especificado.</span>"
        ]
    },
    {
        "indice": 97,
        "titulo": "Consulte la ilustración. ¿Qué comando static route se puede ingresar en R1 para reenviar tráfico a la LAN conectada a R2?",
        "imagen": "5-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "ruta ipv6 2001:db8:12:10::/64 S0/0/1 2001:db8:12:10::1",
            "<span style='color: red;'>ruta ipv6 2001:db8:12:10::/64 S0/0/1 fe80::2</span>",
            "ruta ipv6 2001:db8:12:10::/64 S0/0/0 fe80::2",
            "ruta ipv6 2001:db8:12:10::/64 S0/0/0"
        ]
    },
    {
        "indice": 97,
        "titulo": "Consulte la ilustración.¿Qué comando static route se puede ingresar en R1 para reenviar tráfico a la LAN conectada a R2?",
        "imagen": "5-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "ruta ipv6 2001:db8:12:10::/64 S0/0/1 2001:db8:12:10::1",
            "<span style='color: red;'>ruta ipv6 2001:db8:12:10::/64 S0/0/1 fe80::2</span>",
            "ruta ipv6 2001:db8:12:10::/64 S0/0/0 fe80::2",
            "ruta ipv6 2001:db8:12:10::/64 S0/0/0"
        ]
    },
    {
        "indice": 98,
        "titulo": "Consulte la ilustración. Un administrador de red revisa la configuración del switch S1. ¿Qué protocolo se implementó para agrupar varios puertos de físicos en un único enlace lógico?",
        "imagen": "61-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "DTP",
            "Protocolo de control de agregación de enlaces (LACP)",
            "<span style='color: red;'>PAgP</span>",
            "STP"
        ]
    },
    {
        "indice": 99,
        "titulo": "Consulte la ilustración. ¿Qué afirmación que se muestra en el resultado permite que el router R1 responda a las solicitudes de DHCPv6 sin información de estado?",
        "imagen": "56-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "prefix-delegation 2001:DB8:8::/48 00030001000E84244E70",
            "ipv6 unicast-routing",
            "dns-server 2001:DB8:8::8",
            "ipv6 dhcp server LAN1",
            "<span style='color: red;'>ipv6 nd other-config-flag</span>"
        ]
    },
    {
        "indice": 100,
        "titulo": "¿Cuál es el efecto de ingresar el comando shutdown configuration en un switch?",
        "respuestas": [
            "Permite la protección BPDU en un puerto específico.",
            "Permite portfast en una interfaz de switch específica.",
            "Deshabilita DTP en una interfaz que no sea troncal.",
            "<span style='color: red;'>Deshabilita un puerto no utilizado.</span>"
        ]
    },
    {
        "indice": 101,
        "titulo": "¿Qué protocolo o tecnología requiere que los switches estén en modo servidor o modo cliente?",
        "respuestas": [
            "EtherChannel",
            "<span style='color: red;'>VTP</span>",
            "DTP",
            "STP"
        ]
    },
    {
        "indice": 102,
        "titulo": "¿Por qué se requiere la indagación DHCP cuando se utiliza la función de inspección dinámica de ARP?",
        "respuestas": [
            "Utiliza la tabla de direcciones MAC para verificar la dirección IP predeterminada de la puerta de enlace.",
            "Se basa en la configuración de puertos de confianza y no de confianza establecida por la indagación DHCP.",
            "<span style='color: red;'>Utiliza la base de datos de enlace de dirección MAC a dirección IP para validar un paquete ARP.</span>",
            "Redirige las solicitudes ARP al servidor DHCP para su verificación."
        ]
    },
    {
        "indice": 103,
        "titulo": "¿Cuáles son las tres afirmaciones que describen con precisión las configuraciones de dúplex y de velocidad en los switches Cisco 2960? (Elija tres).",
        "respuestas": [
            "<span style='color: red;'>La configuración de dúplex y de velocidad de cada puerto del switch se puede establecer manualmente.</span>",
            "Habilitar la negociación automática en un hub evita incompatibilidades de velocidad de puertos al conectar el hub al switch.",
            "La característica de autonegociación se encuentra inhabilitada de manera predeterminada.",
            "De manera predeterminada, la velocidad se establece en 100 Mb/s, y el modo dúplex se establece en la opción de autonegociación.",
            "<span style='color: red;'>Cuando la velocidad se establece en 1000 Mb/s, los puertos del switch funcionan en modo full-duplex.</span>",
            "<span style='color: red;'>Una falla de autonegociación puede ocasionar problemas de conectividad.</span>"
        ]
    },
    {
        "indice": 104,
        "titulo": "¿Cuál es una de las desventajas del método de base de datos local para proteger el acceso a dispositivos que se puede resolver usando AAA con servidores centralizados?",
        "respuestas": [
            "Es muy vulnerable a los ataques de fuerza bruta porque no tiene nombre de usuario.",
            "No se puede proporcionar responsabilidad.",
            "<span style='color: red;'>Las cuentas de usuario deben configurarse localmente en cada dispositivo, por lo que la solución de autenticación no es escalable.</span>",
            "Las contraseñas solo se pueden almacenar en texto simple en la configuración en ejecución."
        ]
    },
    {
        "indice": 105,
        "titulo": "Una empresa acaba de cambiar a un nuevo ISP. El ISP ha completado y comprobado la conexión desde su sitio a la empresa. Sin embargo, los empleados de la empresa no pueden acceder a Internet. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Compruebe la configuración en la ruta estática flotante y ajuste la AD.",
            "Cree una ruta estática flotante a esa red.",
            "<span style='color: red;'>Asegúrese de que la antigua ruta predeterminada se haya eliminado de los routers perimetrales de la empresa.</span>",
            "Compruebe que la ruta estática al servidor está presente en la tabla de enrutamiento."
        ]
    },
    {
        "indice": 106,
        "titulo": "¿Cuál es el efecto de ingresar el comando show ip dhcp snooping binding configuration en un switch?",
        "respuestas": [
            "Comprueba la dirección de origen L2 en el encabezado de Ethernet contra la dirección del remitente L2 en el cuerpo ARP.",
            "Restringe el número de mensajes de detección, por segundo, que se recibirán en la interfaz.",
            "<span style='color: red;'>Muestra las asociaciones de direcciones IP a Mac para interfaces de switch.</span>",
            "Cambia un puerto troncal al modo de acceso."
        ]
    },
    {
        "indice": 107,
        "titulo": "¿Qué comando inicia el proceso para agrupar dos interfaces físicas para crear un grupo EtherChannel mediante el LACP?",
        "respuestas": [
            "channel-group 1 mode desirable",
            "channel-group 2 mode auto",
            "<span style='color: red;'>interface range GigabitEthernet 0/4-5</span>",
            "interface port-channel 2"
        ]
    },
    {
        "indice": 108,
        "titulo": "¿En qué situación un técnico usaría el comando de switch show interfaces ?",
        "respuestas": [
            "<span style='color: red;'>Cuando los paquetes se eliminan de un host en particular conectado directamente.</span>",
            "Para determinar si el acceso remoto está habilitado.",
            "Cuando un terminal puede acceder a dispositivos locales, pero no a dispositivos remotos.",
            "Para determinar la dirección MAC de un dispositivo de red conectado directamente a una interfaz específica."
        ]
    },
    {
        "indice": 109,
        "titulo": "Consulte la ilustración. Un administrador de red configura R1 para el enrutamiento entre VLAN entre VLAN 10 y VLAN 20. Sin embargo, los dispositivos de VLAN 10 y VLAN 20 no pueden comunicarse. Basado en la configuración de la exposición, ¿cuál es una posible causa del problema?",
        "imagen": "2021-10-17_220207.jpg",
        "respuestas": [
            "Se debe agregar un comando no shutdown en cada configuración de subinterfaz.",
            "La encapsulación está mal configurada en una subinterfaz.",
            "El puerto Gi0/0 debe configurarse como puerto troncal.",
            "<span style='color: red;'>La interfaz de comando GigabitEthernet 0/0.1 es incorrecta.</span>"
        ]
    },
    {
        "indice": 110,
        "titulo": "Consulte la ilustración. Considere que se acaba de restaurar la alimentación principal. La PC3 emite una solicitud de DHCP IPv4 de difusión. ¿A qué puerto reenvía esta solicitud SW1?",
        "imagen": "130-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "<span style='color: red;'>Solo a Fa0/1, Fa0/2 y Fa0/3</span>",
            "Solo a Fa0/1, Fa0/2, Fa0/3 y Fa0/4",
            "Solo a Fa0/1",
            "Solo a Fa0/1 y Fa0/2",
            "Solo a Fa0/1, Fa0/2 y Fa0/4"
        ]
    },
    {
        "indice": 111,
        "titulo": "Consulte la exhibición. Si las direcciones IP del router de gateway predeterminado y del servidor DNS son correctas, ¿cuál es el problema de configuración?",
        "imagen": "2021-10-17_221535.jpg",
        "respuestas": [
            "El servidor DNS y el router de gateway predeterminado deben estar en la misma subred.",
            "No se incluye la dirección IP del servidor DNS en la lista de direcciones excluidas.",
            "<span style='color: red;'>No se incluye la dirección IP del router de gateway predeterminado en la lista de direcciones excluidas.</span>",
            "Se deben configurar los comandos default-router y dns-server con máscaras de subred."
        ]
    },
    {
        "indice": 112,
        "titulo": "¿Qué opción muestra una ruta estática predeterminada IPv4 correctamente configurada?",
        "respuestas": [
            "<span style='color: red;'>ip route 0.0.0.0 0.0.0.0 S0/0/0</span>",
            "ip route 0.0.0.0 255.0.0.0 S0/0/0",
            "ip route 0.0.0.0 255.255.255.0 S0/0/0",
            "ip route 0.0.0.0 255.255.255.255 S0/0/0"
        ]
    },
    {
        "indice": 113,
        "titulo": "Los usuarios de una LAN no pueden acceder a un servidor web de la empresa, pero pueden llegar a otro lugar. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Asegúrese de que la antigua ruta predeterminada se haya eliminado de los routers perimetrales de la empresa.",
            "Compruebe la configuración en la ruta estática flotante y ajuste la AD.",
            "Cree una ruta estática flotante a esa red.",
            "<span style='color: red;'>Compruebe que la ruta estática al servidor está presente en la tabla de enrutamiento.</span>"
        ]
    },
    {
        "indice": 114,
        "titulo": "¿Qué protocolo o tecnología permite que los datos se transmitan a través de enlaces de switch redundantes?",
        "respuestas": [
            "<span style='color: red;'>STP</span>",
            "DTP",
            "EtherChannel",
            "VTP"
        ]
    },
    {
        "indice": 115,
        "titulo": "¿Qué acción se lleva a cabo cuando un fotograma que ingresa a un switch tiene una dirección MAC de destino de unidifusión que no está en la tabla de direcciones MAC?",
        "respuestas": [
            "<span style='color: red;'>El switch reenviará la trama a todos los puertos excepto el puerto entrante.</span>",
            "El switch reemplaza la entrada anterior y usa el puerto más actual.",
            "El switch restablece el temporizador de actualización en todas las entradas de la tabla de direcciones MAC.",
            "El switch actualiza el temporizador de actualización para la entrada."
        ]
    },
    {
        "indice": 116,
        "titulo": "¿Qué acción se lleva a cabo cuando la dirección MAC de origen de una trama que ingresa a un switch aparece en la tabla de direcciones MAC asociada a un puerto diferente?",
        "respuestas": [
            "El switch reenvía la trama fuera del puerto especificado.",
            "El switch actualiza el temporizador de actualización para la entrada.",
            "El switch purga toda la tabla de direcciones MAC.",
            "<span style='color: red;'>El switch reemplaza la entrada anterior y usa el puerto más actual.</span>"
        ]
    },
    {
        "indice": 117,
        "titulo": "¿Cuáles son los tres pasos que se deben seguir antes de mover un switch de Cisco a un nuevo dominio de administración VTP? (Elija tres opciones).",
        "respuestas": [
            "<span style='color: red;'>Seleccionar el modo y la versión del VTP.</span>",
            "Configurar el servidor VTP en el dominio para que reconozca el BID del switch nuevo.",
            "<span style='color: red;'>Configurar el switch con el nombre del dominio de administración nuevo.</span>",
            "Descargar la base de datos VTP del servidor correspondiente en el dominio nuevo.",
            "<span style='color: red;'>Reiniciar el switch.</span>",
            "Reconfigurar los contadores VTP para permitir que el switch se sincronice con los otros switches en el dominio."
        ]
    },
    {
        "indice": 118,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador utilizaría servidores RADIUS en la red?",
        "respuestas": [
            "para facilitar la configuración de grupos y la administración de varias WLAN a través de un WLC",
            "para supervisar el funcionamiento de la red inalámbrica",
            "<span style='color: red;'>para restringir el acceso a la WLAN sólo por usuarios autorizados y autenticados</span>",
            "para centralizar la administración de varias WLAN"
        ]
    },
    {
        "indice": 119,
        "titulo": "¿Qué protocolo o tecnología utiliza IP de origen a IP de destino como mecanismo de equilibrio de carga?",
        "respuestas": [
            "<span style='color: red;'>EtherChannel</span>",
            "DTP",
            "STP",
            "VTP"
        ]
    },
    {
        "indice": 120,
        "titulo": "¿Qué acción se lleva a cabo cuando la dirección MAC de origen de una trama que ingresa a un switch está en la tabla de direcciones MAC?",
        "respuestas": [
            "El switch reemplaza la entrada anterior y usa el puerto más actual.",
            "El switch agrega una entrada de tabla de direcciones MAC para la dirección MAC de destino y el puerto de salida.",
            "El switch reenvía la trama fuera del puerto especificado.",
            "<span style='color: red;'>El switch actualiza el temporizador de actualización para la entrada.</span>"
        ]
    },
    {
        "indice": 121,
        "titulo": "Consulte la exhibición. Un administrador de red configura un router como servidor de DHCPv6. El administrador emite un comando show ipv6 dhcp pool para verificar la configuración. ¿Cuál de estas afirmaciones explica el motivo por el que el número de clientes activos es 0?",
        "imagen": "2021-10-25_211802.jpg",
        "respuestas": [
            "<span style='color: red;'>El servidor de DHCPv6 no mantiene el estado cuando se implementa DHCPv6 sin estado.</span>",
            "Todavía no se comunicó ningún cliente con el servidor de DHCPv6.",
            "No se especificó ningún rango de direcciones IPv6 para la configuración del pool de DHCP IPv6.",
            "No se proporciona la dirección de gateway predeterminado en el pool."
        ]
    },
    {
        "indice": 122,
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuración ip arp inspection validate src-mac en un switch?",
        "respuestas": [
            "Desactiva todos los puertos troncales.",
            "<span style='color: red;'>Comprueba la dirección de origen L2 en el encabezado de Ethernet contra la dirección del remitente L2 en el cuerpo ARP.</span>",
            "Permite portfast en una interfaz de switch específica.",
            "Muestra las asociaciones de direcciones IP a Mac para interfaces de switch."
        ]
    },
    {
        "indice": 123,
        "titulo": "¿Qué acción se lleva a cabo cuando una trama que ingresa a un switch tiene una dirección MAC de destino de multidifusión?",
        "respuestas": [
            "<span style='color: red;'>El switch reenviará la trama a todos los puertos excepto el puerto entrante.</span>",
            "El switch actualiza el temporizador de actualización para la entrada.",
            "El switch agrega la dirección MAC y el número de puerto entrante a la tabla.",
            "El switch agrega una entrada de tabla de direcciones MAC para la dirección MAC de destino y el puerto de salida."
        ]
    },
    {
        "indice": 124,
        "titulo": "¿Qué técnica de mitigación evitaría que los servidores no autorizados proporcionen parámetros de configuración IP falsos a los clientes?",
        "respuestas": [
            "deshabilitar CDP en puertos perimetrales",
            "<span style='color: red;'>activar la indagación DHCP</span>",
            "mplementar seguridad de puertos",
            "implementar port-security en puertos perimetrales"
        ]
    },
    {
        "indice": 125,
        "titulo": "Los usuarios de la sucursal pudieron acceder a un sitio por la mañana, pero no han tenido conectividad con el sitio desde la hora del almuerzo. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Compruebe que la ruta estática al servidor está presente en la tabla de enrutamiento.",
            "<span style='color: red;'>Utilice el comando «show ip interface brief» para ver si una interfaz está inactiva.</span>",
            "Cree una ruta estática flotante a esa red.",
            "Compruebe la configuración en la ruta estática flotante y ajuste la AD."
        ]
    },
    {
        "indice": 126,
        "titulo": "Una el paso con cada descripción de la secuencia de arranque del switch. (No se utilizan todas las opciones).",
        "imagen": "2021-11-02_094004.jpg"
    },
    {
        "indice": 127,
        "titulo": "Consulte la ilustración. Un administrador intenta instalar una ruta estática IPv6 en el router R1 para llegar a la red conectada al router R2. Después de introducir el comando de ruta estática, la conectividad a la red sigue fallando. ¿Qué error se cometió en la configuración de la ruta estática?",
        "imagen": "146-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.jpg",
        "respuestas": [
            "La red de destino es incorrecta.",
            "<span style='color: red;'>La interfaz es incorrecta.</span>",
            "El prefijo de red es incorrecto.",
            "La dirección de siguiente salto es incorrecta."
        ]
    },
    {
        "indice": 128,
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuration switchport mode access en un switch?",
        "respuestas": [
            "Permite la protección BPDU en un puerto específico.",
            "Deshabilita un puerto no utilizado.",
            "Habilita manualmente un enlace troncal.",
            "<span style='color: red;'>Deshabilita DTP en una interfaz que no sea troncal.</span>"
        ]
    },
    {
        "indice": 129,
        "titulo": "Consulte la ilustración. Un administrador de red está configurando el router R1 para la asignación de direcciones IPv6. En función de la configuración parcial, ¿qué esquema de asignación de direcciones de unidifusión global IPv6 piensa implementar el administrador?",
        "imagen": "127-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "stateless",
            "SLAAC",
            "<span style='color: red;'>Con información de estado</span>",
            "configuración manual"
        ]
    },
    {
        "indice": 130,
        "titulo": "Consulte la ilustración. Un administrador de red configuró los routers R1 y R2 como parte del grupo 1 de HSRP. Después de volver a cargar los routers, un usuario en el Host1 se quejó de la falta de conectividad a Internet. El administrador de redes emitió el comando show standby brief en ambos routers para verificar las operaciones de HSRP. Además, el administrador observó la tabla ARP en el Host1. ¿Qué entrada de la tabla ARP del Host1 se debe observar para obtener conectividad a Internet?",
        "imagen": "9-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "La dirección IP Virtual del grupo 1 de HSRP y la dirección MAC de R2",
            "<span style='color: red;'>La dirección IP Virtual y la dirección MAC virtual para el grupo 1 de HSRP</span>",
            "La dirección IP y la dirección MAC de R1",
            "La dirección IP Virtual del grupo 1 de HSRP y la dirección MAC de R1"
        ]
    },
    {
        "indice": 131,
        "titulo": "Un técnico junior estaba agregando una ruta a un router LAN. Un traceroute a un dispositivo en la nueva red reveló una ruta incorrecta y un estado inalcanzable. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Cree una ruta estática flotante a esa red.",
            "Compruebe que la ruta estática al servidor está presente en la tabla de enrutamiento.",
            "<span style='color: red;'>Compruebe la configuración de la interfaz de salida en la nueva ruta estática.</span>",
            "Compruebe la configuración en la ruta estática flotante y ajuste la AD."
        ]
    },
    {
        "indice": 132,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador aplicaría WPA2 con AES a la WLAN?",
        "respuestas": [
            "<span style='color: red;'>para proporcionar privacidad e integridad al tráfico inalámbrico mediante el encriptado</span>",
            "para proporcionar un servicio priorizado para aplicaciones sensibles al tiempo",
            "para centralizar la administración de varias WLAN",
            "para reducir el riesgo de que se añadan AP no autorizados a la red"
        ]
    },
    {
        "indice": 133,
        "titulo": "¿En qué puertos del switch se debe habilitar la protección BPDU para mejorar la estabilidad del STP?",
        "respuestas": [
            "solo en los puertos que se conectan a un switch vecino",
            "<span style='color: red;'>todos los puertos habilitados para Portfast</span>",
            "a todos los puertos troncales que no son puertos raíz.",
            "solo a los puertos que son elegidos como ouertos designados."
        ]
    },
    {
        "indice": 134,
        "titulo": "¿Cuál es el efecto de ingresar el switchport port-security switchport port-security en un switch?",
        "respuestas": [
            "Habilita globalmente la seguridad de puerto en el switch.",
            "Aprende dinámicamente la dirección L2 y la copia en la configuración en ejecución.",
            "<span style='color: red;'>Permite la seguridad del puerto en una interfaz.</span>",
            "Restringe el número de mensajes de detección, por segundo, que se recibirán en la interfaz."
        ]
    },
    {
        "indice": 135,
        "titulo": "Un ingeniero de red está resolviendo una red inalámbrica recientemente implementada que esté utilizando las últimas normas de 802.11. Cuando los usuarios acceden los servicios de ancho de banda alto como transmisión de video, el rendimiento inalámbrico es pobre. Para mejorar el rendimiento que el ingeniero de red decide configurar una banda de frecuencia SSID de 5 Ghz y capacitar a los usuarios para usar ese SSID para servicios de transmisión de medios. ¿Qué podría esta solución mejorar el rendimiento inalámbrico para ese tipo de servicio?",
        "respuestas": [
            "<span style='color: red;'>Banda dual y 5 GHz tiene más canales y se fortalece menos que la banda de 2.4 GHz, lo que facilita más adecuado a fluir multimedia.</span>",
            "Los únicos usuarios que pueden conmutar a la banda de 5 GHz serán aquellos con los últimos NIC inalámbrico, que reducirán uso.",
            "Banda dual y 5 GHz tiene un mayor alcance y es por ello que ser sin interferencias.",
            "Exigir a los usuarios cambiar a la banda de 5 GHz para transmisión de medios es engorrosa y resultará en menos usuarios que acceden estos servicios."
        ]
    },
    {
        "indice": 136,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador usaría un hub WLAN?",
        "respuestas": [
            "para centralizar la administración de varias WLAN",
            "para proporcionar un servicio priorizado para aplicaciones sensibles al tiempo",
            "<span style='color: red;'>para facilitar la configuración de grupos y la administración de varias WLAN a través de un WLC</span>",
            "para proporcionar privacidad e integridad al tráfico inalámbrico mediante el encriptado"
        ]
    },
    {
        "indice": 137,
        "titulo": "¿Qué comando habilita un router para que este comience a enviar mensajes que le permiten configurar una dirección de enlace local sin utilizar un servidor DHCP IPv6?",
        "respuestas": [
            "Comando ipv6 route ::/0",
            "Una ruta estática",
            "<span style='color: red;'>Comando ipv6 unicast-routing</span>",
            "Comando ip routing"
        ]
    },
    {
        "indice": 138,
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuración ip arp inspection vlan 10 en un switch?",
        "respuestas": [
            "Habilita el DHCP snooping globalmente en un Switch.",
            "Especifica el número máximo de direcciones L2 permitidas en un puerto.",
            "<span style='color: red;'>Habilita DAI en interfaces específicas de un switch previamente configuradas con DHCP snooping.</span>",
            "Habilita globalmente la protección BPDU en todos los puertos habilitados para PortFast."
        ]
    },
    {
        "indice": 139,
        "titulo": "¿Qué protocolo o tecnología administra las negociaciones troncales entre switches?",
        "respuestas": [
            "VTP",
            "EtherChannel",
            "STP",
            "<span style='color: red;'>DTP</span>"
        ]
    },
    {
        "indice": 140,
        "titulo": "¿Qué protocolo o tecnología utiliza un router en espera para asumir la responsabilidad de reenvío de paquetes si falla el router activo?",
        "respuestas": [
            "DTP",
            "VTP",
            "EtherChannel",
            "<span style='color: red;'>HSRP</span>"
        ]
    },
    {
        "indice": 141,
        "titulo": "¿Qué protocolo o tecnología define un grupo de routeres, uno de ellos definido como activo y otro como en espera?",
        "respuestas": [
            "EtherChannel",
            "DTP",
            "VTP",
            "<span style='color: red;'>HSRP</span>"
        ]
    },
    {
        "indice": 142,
        "titulo": "Un administrador de red esta configurando una WLAN. ¿Por qué el administrador deshabilitaría la función de difusión para el SSID?",
        "respuestas": [
            "para proporcionar un servicio priorizado para aplicaciones sensibles al tiempo",
            "para facilitar la configuración de grupos y la administración de varias WLAN a través de un WLC",
            "<span style='color: red;'>para eliminar a los usuarios externos que escanean los SSID disponibles en el área</span>",
            "para centralizar la administración de varias WLAN"
        ]
    },
    {
        "indice": 143,
        "titulo": "Los empleados no pueden conectarse a servidores en una de las redes internas. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Compruebe las estadísticas de la ruta predeterminada para la sobresaturación.",
            "Cree rutas estáticas a todas las redes internas y una ruta predeterminada a Internet.",
            "Compruebe que no hay una ruta predeterminada en ninguna de las tablas de enrutamiento del router perimetral.",
            "<span style='color: red;'>Utilice el comando «show ip interface brief» para ver si una interfaz está inactiva.</span>"
        ]
    },
    {
        "indice": 144,
        "titulo": "Un técnico está configurando un router para una pequeña empresa con varias WLAN y no necesita la complejidad de un protocolo de enrutamiento dinámico. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Compruebe que no hay una ruta predeterminada en ninguna de las tablas de enrutamiento del router perimetral.",
            "Compruebe la configuración en la ruta estática flotante y ajuste la AD.",
            "<span style='color: red;'>Cree rutas estáticas a todas las redes internas y una ruta predeterminada a Internet.</span>",
            "Cree una ruta estática flotante a esa red."
        ]
    },
    {
        "indice": "_33",
        "titulo": "¿Cuál es el efecto de ingresar el comando de configuración de spanning-tree portfast en un switch?",
        "respuestas": [
            "Deshabilita un puerto no utilizado.",
            "Deshabilita todos los puertos troncales.",
            "<span style='color: red;'>Habilita portfast en una interfaz de conmutador específica.</span>",
            "Compara la dirección L2 de origen en el encabezado de Ethernet con la dirección L2 del remitente en el cuerpo de ARP."
        ],
    },
    {
        "indice": "_74",
        "titulo": "Consulte la ilustración. ¿Qué enlace troncal no reenviará el tráfico después de que se complete el proceso de elección del puente raíz?",
        "imagen": "74-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.jpg",
        "respuestas": [
            "Trunk1",
            "<span style='color: red;'>Trunk2</span>",
            "Trunk3",
            "Trunk4"
        ]
    },
    {
        "indice": "_88",
        "titulo": "¿Qué plan de mitigación es mejor para frustrar un ataque DoS que está creando un desbordamiento de la tabla de direcciones MAC?",
        "respuestas": [
            "Inhabilite DTP.",
            "Deshabilite STP.",
            "<span style='color: red;'>Habilite la seguridad del puerto.</span>",
            "Coloque los puertos no utilizados en una VLAN no utilizada."
        ]
    },
    {
        "indice": "_90",
        "titulo": "¿Qué mensaje DHCPv4 enviará un cliente para aceptar una dirección IPv4 ofrecida por un servidor DHCP?",
        "respuestas": [
            "transmitir DHCPACK",
            "<span style='color: red;'>transmite DHCPREQUEST</span>",
            "DHCPACK de unidifusión",
            "unidifusión DHCPREQUEST"
        ]
    },
    {
        "indice": "_93",
        "titulo": "Una coincidir el propósito con su tipo de mensaje DHCP. (No se utilizan todas las opciones).",
        "imagen": "93-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.jpg",
        "respuestas": [
            // Agrega las opciones correspondientes
        ]
    },
    {
        "indice": "_94",
        "titulo": "¿Qué protocolo agrega seguridad a las conexiones remotas?",
        "respuestas": [
            "FTP",
            "HTTP",
            "NetBEUI",
            "POP",
            "<span style='color: red;'>SSH</span>"
        ]
    },
    {
        "indice": "_95",
        "titulo": "Consulte la ilustración. Un administrador de red está verificando la configuración del enrutamiento InterVLAN. Los usuarios se quejan de que la PC2 no puede comunicarse con la PC1. Según el resultado, ¿cuál es la posible causa del problema?",
        "imagen": "95-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "Gi0/0 no está configurado como puerto troncal.",
            "La interfaz de comando GigabitEthernet0/0.5 se ingresó incorrectamente.",
            "No hay una dirección IP configurada en la interfaz Gi0/0.",
            "El comando no shutdown no se ingresa en las subinterfaces.",
            "<span style='color: red;'>El comando encapsulation dot1Q 5 contiene la VLAN incorrecta.</span>"
        ]
    },
    {
        "indice": "_97",
        "titulo": "Una coincidir cada tipo de mensaje DHCP con su descripción. (No se utilizan todas las opciones).",
        "imagen": "97-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.jpg",
        "respuestas": [
            // Agrega las opciones correspondientes
        ]
    },
    {
        "indice": "_129",
        "titulo": "Se agregará un nuevo conmutador a una red existente en una oficina remota. El administrador de la red no quiere que los técnicos de la oficina remota puedan agregar nuevas VLAN al switch, pero el conmutador debe recibir actualizaciones de VLAN desde el dominio VTP. ¿Qué dos pasos se deben realizar para configurar VTP en el nuevo conmutador para cumplir con estas condiciones? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>Configure el nuevo conmutador como cliente VTP.</span>",
            "<span style='color: red;'>Configure el nombre de dominio del VTP existente en el nuevo conmutador.</span>",
            "Configure una dirección IP en el nuevo conmutador.",
            "Configure todos los puertos de ambos conmutadores en modo de acceso.",
            "Habilite la poda de VTP."
        ]
    },
    {
        "indice": "_134",
        "titulo": "Un administrador se da cuenta de que se están cayendo grandes cantidades de paquetes en uno de los enrutadores de sucursal. ¿Qué se debe hacer o verificar?",
        "respuestas": [
            "Cree rutas estáticas a todas las redes internas y una ruta predeterminada a Internet.",
            "Cree rutas estáticas adicionales a la misma ubicación con un AD de 1.",
            "Verifique las estadísticas de la ruta predeterminada para ver si hay sobresaturación.",
            "<span style='color: red;'>Verifique la tabla de enrutamiento para ver si falta una ruta estática.</span>"
        ]
    },
    {
        "indice": "_135",
        "titulo": "¿Cuáles son las dos características del switch que podrían ayudar a aliviar la congestión de la red? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>cambio interno rápido</span>",
            "<span style='color: red;'>búferes de marcos grandes</span>",
            "cambio de almacenamiento y reenvío",
            "baja densidad de puertos",
            "verificación de secuencia de verificación de cuadros (FCS)"
        ]
    },
    {
        "indice": "_136",
        "titulo": "¿Cuál es el resultado de conectar dos o más conmutadores juntos?",
        "respuestas": [
            "Se aumenta la cantidad de dominios de transmisión.",
            "<span style='color: red;'>Se aumenta el tamaño del dominio de transmisión.</span>",
            "Se reduce la cantidad de dominios de colisión.",
            "Se aumenta el tamaño del dominio de colisión."
        ]
    },
    {
        "indice": "_141",
        "titulo": "Consulte la ilustración. La PC-A y la PC-B están en la VLAN 60. La PC-A no puede comunicarse con la PC-B. ¿Cuál es el problema?",
        "imagen": "141-CCNA-2-v7-Examen-Final-Preguntas-y-Respuestas.png",
        "respuestas": [
            "La VLAN nativa debe ser VLAN 60.",
            "La VLAN nativa se está eliminando del enlace.",
            "El tronco se ha configurado con el comando switchport nonegotiate.",
            "<span style='color: red;'>La VLAN que utiliza la PC-A no está en la lista de VLAN permitidas en el tronco.</span>"
        ]
    },
    {
        "indice": "_145",
        "titulo": "Un administrador de red está configurando una WLAN. ¿Por qué el administrador deshabilitaría la función de transmisión para el SSID?",
        "respuestas": [
            "<span style='color: red;'>para eliminar a los forasteros que buscan SSID disponibles en el área</span>",
            "para centralizar la administración de múltiples WLAN",
            "para facilitar la configuración grupal y la administración de múltiples WLAN a través de un WLC",
            "para proporcionar un servicio prioritario para aplicaciones urgentes"
        ]
    },
    {
        "indice": "_155",
        "titulo": "Un administrador de red está configurando una WLAN. ¿Por qué el administrador cambiaría las direcciones DHCP IPv4 predeterminadas en un AP?",
        "respuestas": [
            "para eliminar a los forasteros que buscan SSID disponibles en el área",
            "para reducir el riesgo de que se agreguen puntos de acceso no autorizados a la red",
            "<span style='color: red;'>para reducir que personas externas intercepten datos o accedan a la red inalámbrica mediante el uso de un rango de direcciones conocido</span>",
            "para reducir el riesgo de interferencia de dispositivos externos como hornos microondas"
        ]
    },
    {
        "indice": "_158",
        "titulo": "¿Qué dirección y longitud de prefijo se utiliza al configurar una ruta estática predeterminada IPv6?",
        "respuestas": [
            "<span style='color: red;'>::/0</span>",
            "FF02::1/8",
            "0.0.0.0/0",
            "::1/128"
        ]
    },
    {
        "indice": "_159",
        "titulo": "¿Cuáles son dos características de Cisco Express Forwarding (CEF)? (Elija dos opciones.)",
        "respuestas": [
            "Cuando un paquete llega a la interfaz de un enrutador, se reenvía al plano de control donde la CPU hace coincidir la dirección de destino con una entrada de la tabla de enrutamiento correspondiente.",
            "<span style='color: red;'>Este es el mecanismo de reenvío más rápido en los enrutadores y conmutadores multicapa de Cisco.</span>",
            "Con este método de conmutación, la información de flujo de un paquete se almacena en la caché de conmutación rápida para reenviar paquetes futuros al mismo destino sin la intervención de la CPU.",
            "<span style='color: red;'>Los paquetes se reenvían según la información de la FIB y una tabla de adyacencia.</span>",
            "Cuando un paquete llega a la interfaz de un enrutador, se reenvía al plano de control donde la CPU busca una coincidencia en la caché de conmutación rápida."
        ]
    },
    {
        "indice": "_160",
        "titulo": "¿Qué término describe la función de un switch Cisco en el control de acceso basado en puertos 802.1X?",
        "respuestas": [
            "agente",
            "suplicante",
            "<span style='color: red;'>autenticador</span>",
            "servidor de autenticación"
        ]
    },
    {
        "indice": "_161",
        "titulo": "¿Qué solución de Cisco ayuda a prevenir la suplantación de ARP y los ataques de envenenamiento de ARP?",
        "respuestas": [
            "<span style='color: red;'>Inspección dinámica de ARP</span>",
            "IP Source Guard",
            "Inspección de DHCP",
            "Seguridad del puerto"
        ]
    },
    {
        "indice": "_162",
        "titulo": "¿Cuál es una ventaja de PVST +?",
        "respuestas": [
            "PVST + optimiza el rendimiento en la red mediante la selección automática del puente raíz.",
            "PVST + reduce el consumo de ancho de banda en comparación con las implementaciones tradicionales de STP que utilizan CST.",
            "PVST + requiere menos ciclos de CPU para todos los conmutadores de la red.",
            "<span style='color: red;'>PVST + optimiza el rendimiento en la red mediante el uso compartido de la carga.</span>"
        ]
    },
    {
        "indice": "_166",
        "titulo": "Una pequeña empresa editorial tiene un diseño de red tal que cuando se envía una transmisión en la LAN, 200 dispositivos reciben la transmisión transmitida. ¿Cómo puede el administrador de red reducir la cantidad de dispositivos que reciben tráfico de transmisión?",
        "respuestas": [
            "Agregue más conmutadores para que haya menos dispositivos en un switch en particular.",
            "Reemplace los conmutadores con conmutadores que tengan más puertos por conmutador. Esto permitirá que haya más dispositivos en un switch en particular.",
            "<span style='color: red;'>Segmente la LAN en LAN más pequeñas y enrute entre ellas.</span>",
            "Reemplace al menos la mitad de los conmutadores con concentradores para reducir el tamaño del dominio de transmisión."
        ]
    },
    {
        "indice": "_167",
        "titulo": "¿Qué define una ruta de host en un router Cisco?",
        "respuestas": [
            "La dirección de enlace local se agrega automáticamente a la tabla de enrutamiento como una ruta de host IPv6.",
            "<span style='color: red;'>Una configuración de ruta de host estática IPv4 utiliza una dirección IP de destino de un dispositivo específico y una máscara de subred/32.</span>",
            "Una ruta de host se designa con una C en la tabla de enrutamiento.",
            "Una ruta de host IPv6 estática debe incluir el tipo de interfaz y el número de interfaz del router del siguiente salto."
        ]
    },
    {
        "indice": "_168",
        "titulo": "¿Qué más se requiere al configurar una ruta estática IPv6 usando una dirección local de enlace de siguiente salto?",
        "respuestas": [
            "distancia administrativa",
            "dirección IP del router vecino",
            "número de red y máscara de subred en la interfaz del router vecino",
            "<span style='color: red;'>número y tipo de interfaz</span>"
        ]
    },
    {
        "indice": "_169",
        "titulo": "Un técnico está configurando una red inalámbrica para una pequeña empresa utilizando un enrutador inalámbrico SOHO. ¿Qué dos métodos de autenticación se utilizan si el enrutador está configurado con WPA2? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>personal</span>",
            "AES",
            "TKIP",
            "WEP",
            "<span style='color: red;'>empresa</span>"
        ]
    },
    {
        "indice": "_170",
        "titulo": "¿Qué técnica de mitigación evitaría que los servidores no autorizados proporcionen parámetros de configuración de IPv6 falsos a los clientes?",
        "respuestas": [
            "<span style='color: red;'>habilitando DHCPv6 Guard</span>",
            "habilitar RA Guard",
            "implementación de seguridad de puertos en puertos de borde",
            "deshabilitar CDP en los puertos de borde"
        ]
    },
    {
        "indice": "_171",
        "titulo": "Una PC ha enviado un mensaje RS a un enrutador IPv6 conectado a la misma red. ¿Qué dos datos enviará el enrutador al cliente? (Elija dos opciones.)",
        "respuestas": [
            "<span style='color: red;'>longitud del prefijo</span>",
            "máscara de subred en notación decimal con puntos",
            "nombre de dominio",
            "distancia administrativa",
            "<span style='color: red;'>prefijo</span>",
            "dirección IP del servidor DNS"
        ]
    },
    {
        "indice": "_172",
        "titulo": "Mientras asisten a una conferencia, los participantes utilizan computadoras portátiles para conectarse a la red. Cuando un orador invitado intenta conectarse a la red, la computadora portátil no muestra ninguna red inalámbrica disponible. ¿El punto de acceso debe estar funcionando en qué modo?",
        "respuestas": [
            "mixto",
            "pasivo",
            "<span style='color: red;'>activo</span>",
            "abierto"
        ]
    },
    {
        "indice": "_173",
        "titulo": "¿Qué tres componentes se combinan para formar un ID de puente?",
        "respuestas": [
            "<span style='color: red;'>ID de sistema extendido</span>",
            "costo",
            "dirección IP",
            "<span style='color: red;'>prioridad de puente</span>",
            "<span style='color: red;'>dirección MAC</span>",
            "ID de puerto"
        ]
    }
]