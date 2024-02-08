import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createAddContactAction, createReplaceContactAction,createUnMarkContactEditbleAction} from "../state/actions";

const ContactsListFormItem = ({ contact }) => {

    const dispatch = useDispatch();

    let { register,
        reset,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: contact ?? { id: 0, name: "", dob: new Date().toISOString().substring(0, 10), mail: "", mobile: "" }
        });

    const formSubmitted = data => { 
        contact ? dispatch(createReplaceContactAction(data)) : dispatch(createAddContactAction(data)); 
        reset(); 
    };
    
    const cancelBtnClicked = e => ( contact ? dispatch(createUnMarkContactEditbleAction(contact.id)) : reset());

    return (
        <form className='row border-bottom border-primary p-2' onSubmit={handleSubmit(formSubmitted)}>
            <div className='col-1'>
                <input type="text" className='form-control' {...register("id")} readOnly="true" />
            </div>
            <div className='col'>
                <input type="text" className='form-control' {...register("name",{required:true,minLength:5,maxLength:25})} />
                {errors.name && 
                    <div className='alert alert-danger p-2'>
                        {errors.name.type==="required" && <span>Name is a mandatory field </span> }
                        {errors.name.type==="minLength" && <span> Name msut be atleast 5 letters in length </span>}
                        {errors.name.type==="maxLength" && <span> Name msut be atmax 25 letters in length </span>}
                    </div>
                }
            </div>
            <div className='col-2'>
                <input type="date" className='form-control' {...register("dob",{required:true})} />
                {errors.dob && 
                    <div className='alert alert-danger p-2'>
                        {errors.dob.type==="required" && <span>Date Of Birth is a mandatory field</span>}
                    </div>
                }
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' {...register("mail",{required:true})} />
                {errors.mail && 
                    <div className='alert alert-danger p-2'>
                        {errors.mail.type==="required" && <span>Mail is a mandatory field</span>}
                    </div>
                }
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' {...register("mobile",{required:true,pattern:/[1-9][0-9]{9}/})} />
                {errors.mobile && 
                    <div className='alert alert-danger p-2'>
                        {errors.mobile.type==="required" && <span>Mobile Number is a mandatory field</span>}
                        {errors.mobile.type==="pattern" && <span>Mobile Number must be a 10 digit number</span>}
                    </div>
                }
            </div>
            <div className='col-2 text-center'>
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