
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