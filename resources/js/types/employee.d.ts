type Employee = {
    id: number;
    name: string;
    position: string;
    start_date: string;
    status: boolean;
    created_at: string;
    updated_at: string;
};

type NewEmployee = Omit<Employee, 'id' | 'created_at' | 'updated_at'>;
