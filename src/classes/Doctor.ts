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