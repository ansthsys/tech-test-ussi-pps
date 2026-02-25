import { Link, router, useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import type { SubmitEvent } from 'react';
import { AlertDialog } from '@/components/AlertDialog';
import DateField from '@/components/DateField';
import Layout from '@/components/Layout';
import SelectField from '@/components/SelectField';
import TextField from '@/components/TextField';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { FieldGroup } from '@/components/ui/field';
import { SELECT_OPTION_POSITION, SELECT_OPTION_STATUS } from '@/constants/employee';

type Props = {
    employee: Employee;
};

export default function Detail({ employee }: Props) {
    const { data, setData, put, errors } = useForm<NewEmployee>({
        name: employee.name,
        position: employee.position,
        start_date: employee.start_date,
        status: employee.status,
    });

    const onDeleteData = (id: number) => {
        router.delete(`/employee/${id}`);
    };

    const onSubmitForm = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/employee/${employee.id}`);
    };

    return (
        <Layout>
            <div className="mb-8 flex flex-row items-center justify-between">
                <Title size="large" className="line-clamp-2">
                    Edit Employee: #{employee.id}-{employee.name}
                </Title>
                <Button asChild>
                    <Link href="/employee">Cancel</Link>
                </Button>
            </div>
            <div>
                <form onSubmit={onSubmitForm}>
                    <Card>
                        <CardContent>
                            <FieldGroup>
                                <TextField
                                    id={data.name}
                                    type="text"
                                    title="Employee name"
                                    placeholder="Input employee name"
                                    name="name"
                                    value={data.name}
                                    onChange={(v) => setData('name', v)}
                                    error={errors.name}
                                />

                                <SelectField
                                    title="Employee position"
                                    placeholder="Select employee position"
                                    name="position"
                                    value={data.position}
                                    options={SELECT_OPTION_POSITION}
                                    onValueChange={(v) => setData('position', v)}
                                    error={errors.position}
                                />

                                <DateField
                                    title="Employee start date"
                                    placeholder="Select start date"
                                    value={data.start_date ? new Date(data.start_date) : undefined}
                                    onChange={(v) => setData('start_date', v ? format(v, 'yyyy-MM-dd') : '')}
                                    error={errors.start_date}
                                />

                                <SelectField
                                    title="Employee status"
                                    placeholder="Select employee status"
                                    name="status"
                                    value={data.status}
                                    options={SELECT_OPTION_STATUS}
                                    onValueChange={(v) => setData('status', v)}
                                    error={errors.status}
                                />
                            </FieldGroup>
                        </CardContent>
                        <CardFooter className="justify-end gap-5">
                            <AlertDialog
                                title="Delete employee?"
                                description="This action cannot be canceled"
                                submitText="Delete"
                                submitButtonProps={{
                                    variant: 'destructive',
                                }}
                                onSubmit={() => onDeleteData(employee.id)}
                            >
                                <Button variant={'destructive'} type="button">
                                    Delete
                                </Button>
                            </AlertDialog>
                            <Button type="submit">Update</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </Layout>
    );
}
