# Actividad 8: Calidad de Código, Deuda Técnica y Seguridad (DevSecOps)

Este repositorio contiene la implementación práctica y teórica correspondiente a la **Actividad 8**, orientada a transformar el enfoque tradicional de desarrollo ("el código funciona") hacia una cultura **DevSecOps**, garantizando software seguro, mantenible y alineado a estándares de calidad empresarial.

---

## 👥 Integrantes del Equipo (Equipo #X)

* **Nombre y Apellido** - Agustín Nicolás López
* **Nombre y Apellido** - Rol / Aportes
* **Nombre y Apellido** - Rol / Aportes
* **Nombre y Apellido** - Rol / Aportes

---

## 📚 Marco Teórico

### 1. Deuda Técnica y Code Smells
* **Deuda Técnica:** El costo implícito de priorizar entregas rápidas adoptando soluciones subóptimas o "atajos" en lugar de un diseño limpio. A largo plazo, genera intereses: mayor esfuerzo de mantenimiento, lentitud en la entrega de features y fragilidad del sistema.
* **Code Smells:** Síntomas en el código fuente (como variables sin usar, métodos sobrecargados o lógica duplicada) que no necesariamente impiden la ejecución, pero señalan debilidades de diseño que aumentan drásticamente la deuda técnica.

### 2. Testing Dinámico (DAST/Funcional) vs. Análisis Estático (SAST)
* **Testing Dinámico (Playwright):** Evalúa el comportamiento del software en tiempo de ejecución. Valida flujos funcionales de usuario, respuestas de interfaz y contratos de red.
* **Análisis Estático (SAST - SonarCloud):** Inspecciona el código fuente sin ejecutarlo. Identifica vulnerabilidades, fallas de sintaxis, violaciones de estándares y problemas de mantenibilidad directamente en la base de código.

### 3. Seguridad en la Cadena de Suministro (Supply Chain Security)
Las aplicaciones modernas delegan gran parte de su lógica a dependencias de terceros (`package.json`, `requirements.txt`). Un ataque a la cadena de suministro ocurre cuando una librería contiene vulnerabilidades conocidas o es comprometida por un actor malicioso. Herramientas automatizadas permiten auditar y alertar sobre componentes obsoletos o inseguros antes de que lleguen a producción.

### 4. Stack de Herramientas Implementadas
* **SonarCloud:** Plataforma SaaS para SAST y gestión continua de la calidad y cobertura.
* **GitHub Dependabot:** Escáner nativo que monitorea dependencias vulnerables y automatiza la apertura de Pull Requests de remediación.

---
