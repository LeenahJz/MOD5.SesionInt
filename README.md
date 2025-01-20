# Sesión Interactiva
Este sesión consiste en la realización de actividades que discute conceptos fundamentales de Typescript en ReactJS.

1. Preguntas teóricas sobre typescript 
-¿Qué es TypeScript y para qué se utiliza?
R: ES un lenguaje de programación orientado a los objetos, debe ser compilado y sus variables necesitan tener un tipado estático. Además, tiene un manejo de los errores más prolijo. Se puede utilizar en proyectos a gran escala que requieran una buena estructuración del código y también por su buen manejos de errores, puede prevenir bugs.

2. ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?
R: Muchos programadores convergen en que Typescript es JavaScript, pero que simplemente tiene reglas de escritura mucho más estrictas. Las diferencias que tienen son que TypeScript necesita compilación, requiere un tipado estático, soporta modularización, manejo de errores. Por otro lado, JavaScript no se compila, no maneja errores durante la compilación, no soporta modularización, y es de un tipado dinámico.
 
3. ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?
R: Es mejor utilizarlo en  proyectos grandes para hacerlos organizados y manejables. TypeScript también se ejecuta más rápido porque el compilador se encarga de esa optimización, lo cual reduce el tiempo de manejo de errores y así, a grandes rasgos mejora la velocidad de la aplicación. Este código también puede ser más predictivo, fácil de mantener y así reducir el costo de un proyecto.
4. ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en
tiempo de desarrollo?
R:  Es el tipado que se maneja al momento de escribir el código, en TypeScript se utiliza uno estatico, el cual te obliga a definir en tu código que tipo de datos debe esperar. Gracias al tipeado estático, se puede detectar error más fácilmente. 


PARA EL EJERCICIO PRÁCTICO SE INCURRE EN EL CÓDIGO CON LA SIGUIENTE
Estructura

mod5.ej1
├── node_Modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── classes
│   │   └── Doctor.tx
│   ├── components
│   │   └── DoctorCard.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── Context.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js


## 2. Ejercicio Práctico: Definiendo Tipos e Inferencia

Para mostrar los datos de los doctores se utilizaron los siguientes tipados
----> 

```js
//definiendo la interfaz para los doctores
interface Doctor {
    id: number;
    name: string;
    specialty: string;
    experience?: string;
    image: string;
}
```
## 3. Definición de Interfaces y Clases en TypeScript
Se creo la clase Doctor.ts.
```js
class Doctor {
    id: number;
    name: string;
    specialty: string;
    experience?: string;
    image: string;

    constructor(id: number, name: string, specialty: string, image: string, experience?: string) {
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.experience = experience;
        this.image = image;
    }
}

export default Doctor;

```
## 4. TypeScript y ReactJS: Implementación Básica en un Componente

En DoctorCard.tsx implementan los props.
```js
//se define props del componente DoctorCard
interface DoctorCardProps {
    doctors: Doctor[];
}
```
## 5. Ventajas de TypeScript en el Desarrollo con ReactJS

RESP: Utilizar Typescript te previene varios errores que se puedan mientras se escribe el código, también te ayuda a tenerlo mejor organizado y más prolijo.

```js
import DoctorCard from "./components/DoctorCard";
import React, { useEffect, useRef, useState } from "react";
import Doctor from "./classes/Doctor";


const App: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const doctorRef = useRef<HTMLDivElement>(null);

    //simulación de API
    useEffect(() => {
        const fetchDoctors = async () => {
            const mockDoctors = [
                new Doctor(1, 'Dr. John Doe', 'Cardiology', 'https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg', '10 years'),
                new Doctor(2, 'Dr. Jane Smith', 'Neurology', 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360', '8 years'),
                new Doctor(3, 'Dr. Alice Brown', 'Dermatology', 'https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg', '5 years'),
                new Doctor(4, 'Dr. Emily White', 'Pediatrics', 'https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg', '7 years'),
                new Doctor(5, 'Dr. Michael Green', 'Oncology', 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg', '15 years')
            ];
            setDoctors(mockDoctors);
        };
        fetchDoctors();
    }, []);

    return (
        <div className="w-full h-screen px-6 py-12 bg-blue-200">
            <h1 className="text-center text-4xl font-bold my-8 text-blue-800">My first TypeScript</h1>
            <DoctorCard doctors={doctors} ref={doctorRef} />
        </div>
    );
};

export default App;
```



