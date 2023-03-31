import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useMain } from '../hooks/useMain';
import { RotatingLines } from 'react-loader-spinner';

const columns = [
    {
        name: <h4 className="text-lg font-bold">Name</h4>,
        selector: row => <p className="text-base">{row.name}</p>,
        sortable: true,
    },
    {
        name: <h4 className="text-lg font-bold">Email</h4>,
        selector: row => <p className="text-base">{row.email}</p>,
        sortable: true,
    },
    {
        name: <h4 className="text-lg font-bold">Phone</h4>,
        selector: row => <p className="text-base">{row.phone}</p>,
        sortable: true,
    },
];

const Admin = () => {
    const { getUsers } = useMain();

    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setFlag(false);
        let ans = await getUsers();
        console.log(ans);
        setData(ans.data);
        setFlag(true);
    };

    return (
        <>
            <div className="admin-main">
                <div className="admin-main1 py-6 px-14">
                    {flag ? <DataTable
                        columns={columns}
                        data={data}
                        striped={true}
                        title={"Registerd Users"}
                        pagination
                    /> : <div className='text-center flex justify-center'> <RotatingLines
                        strokeColor="black"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="50"
                        visible={true}
                    /></div>}
                </div>
            </div>
        </>
    )
}

export default Admin;
