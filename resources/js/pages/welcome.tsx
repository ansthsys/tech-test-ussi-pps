import Layout from '@/components/Layout';

export default function Welcome() {
    return (
        <Layout>
            <div className="mx-auto max-w-4xl space-y-8 px-6 py-10">
                <h1 className="text-3xl font-bold">tech-test-ussi-pps</h1>

                <div>
                    <p className="mb-4">Create a simple app to manage employees:</p>
                    <ul className="list-inside list-disc space-y-1">
                        <li>Create employee</li>
                        <li>List employee</li>
                        <li>Edit employee</li>
                        <li>Delete employee</li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold">Prerequisites</h2>
                    <ul className="list-inside list-disc space-y-1">
                        <li>Node &gt;= 22</li>
                        <li>NPM</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold">Tech Stack</h2>
                    <ul className="list-inside list-disc space-y-1">
                        <li>TanStack Start</li>
                        <li>TanStack Form</li>
                        <li>Drizzle ORM</li>
                        <li>SQLite</li>
                        <li>Shadcn</li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold">Run Locally</h2>
                    <ul className="list-inside list-disc space-y-1">
                        <li>
                            Copy env <code className="rounded bg-gray-100 px-1">cp .env.example .env</code>
                        </li>
                        <li>
                            Install dependencies <code className="rounded bg-gray-100 px-1">npm install</code>
                        </li>
                        <li>
                            Run project <code className="rounded bg-gray-100 px-1">npm run dev</code>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-4 text-xl font-semibold">Requirement</h2>

                    <h3 className="mb-2 text-lg font-semibold">Data Structure</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border p-2 text-left">Field</th>
                                    <th className="border p-2 text-left">Type</th>
                                    <th className="border p-2 text-left">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">id</td>
                                    <td className="border p-2">Int (Primary Key)</td>
                                    <td className="border p-2">Employee id</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">name</td>
                                    <td className="border p-2">String</td>
                                    <td className="border p-2">Employee name</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">position</td>
                                    <td className="border p-2">Enum (admin, staff, manager)</td>
                                    <td className="border p-2">Employee position</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">start_date</td>
                                    <td className="border p-2">Date</td>
                                    <td className="border p-2">Employee start date</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">status</td>
                                    <td className="border p-2">Boolean</td>
                                    <td className="border p-2">Employee status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-6 mb-2 text-lg font-semibold">Validation</h3>
                    <ul className="list-inside list-disc space-y-1">
                        <li>
                            <strong>id</strong>: auto increment, required
                        </li>
                        <li>
                            <strong>name</strong>: required
                        </li>
                        <li>
                            <strong>start_date</strong>: required, cannot be greater than today
                        </li>
                        <li>
                            <strong>position</strong>: required, must be one of admin, staff, or manager
                        </li>
                        <li>
                            <strong>status</strong>: nullable, default to true
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
