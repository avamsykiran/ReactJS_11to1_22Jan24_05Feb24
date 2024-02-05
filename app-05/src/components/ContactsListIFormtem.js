import { useForm } from 'react-hook-form';

const ContactsListFormItem = ({ contact, save, cancelEdit }) => {

    let { register,
        reset,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: contact ?? { id: 0, name: "", dob: new Date().toISOString().substring(0, 10), mail: "", mobile: "" }
        });

    const formSubmitted = data => { save(data); reset(); };
    const cancelBtnClicked = e => ( contact ? cancelEdit(contact.id) : reset());

    return (
        <form className='row border-bottom border-primary p-2 text-center' onSubmit={handleSubmit(formSubmitted)}>
            <div className='col-1'>
                <input type="text" className='form-control' {...register("id")} readOnly="true" />
            </div>
            <div className='col'>
                <input type="text" className='form-control' {...register("name")} />
            </div>
            <div className='col-2'>
                <input type="date" className='form-control' {...register("dob")} />
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' {...register("mail")} />
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' {...register("mobile")} />
            </div>
            <div className='col-2'>
                <button type="submit" className="btn btn-sm btn-primary me-1">
                    SAVE
                </button>
                <button type="button" className="btn btn-sm btn-danger" onClick={cancelBtnClicked}>
                    CANCEL
                </button>
            </div>
        </form>
    );
}

export default ContactsListFormItem;