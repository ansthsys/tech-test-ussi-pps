import { Link } from '@inertiajs/react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type Props = {
    employees: Employee[];
};

export default function Index({ employees }: Props) {
    return (
        <Layout>
            <div className="mb-8 flex flex-row items-center justify-between">
                <Title size="large">List Employee</Title>
                <Button asChild>
                    <Link href="/employee/create">Create Employee</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableCaption>All list of employee</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Start Data</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {employees.length > 0 &&
                            employees.map((e) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.id}</TableCell>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={'default'}>{e.position}</Badge>
                                    </TableCell>
                                    <TableCell>{format(new Date(e.start_date), 'EEEE, dd MM yyyy')}</TableCell>
                                    <TableCell>
                                        {e.status ? <Badge variant={'outline'}>Active</Badge> : <Badge variant={'destructive'}>Inactive</Badge>}
                                    </TableCell>
                                    <TableCell>
                                        <Button variant={'outline'} asChild>
                                            <Link href={`/employee/${e.id}`}>Show</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}

                        {employees.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    Employee is empty
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Layout>
    );
}
