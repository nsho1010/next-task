import { EditTaskForm } from "@/components/EditTaskForm/EditTaskForm"

interface Params {
    params: {
        id:string
    }
}

const EditTakPage = ({params}:Params) => {
    // const id = params.id
    return (
        <div className='flex flex-col justify-center py-20'>
            <h2 className='text-center text-2xl font-bold '>EditTask</h2>
            <EditTaskForm/>
        </div>
      )
}

export default EditTakPage