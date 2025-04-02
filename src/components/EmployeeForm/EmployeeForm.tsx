import { useForm } from "react-hook-form";
import { Employee } from "../../redux/employeeSlice";
import { useNavigate } from "react-router-dom";
import classes from "./EmployeeForm.module.scss";
import { useEffect } from "react";

interface EmployeeFormProps {
  onSubmit: (data: Employee) => void;
  defaultValues?: Employee | null; 
}

const EmployeeForm = ({ onSubmit, defaultValues }: EmployeeFormProps) => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<Employee>({
    defaultValues: defaultValues || {},
  });
  const navigate = useNavigate();
  const contractType = watch("contractType");
  const fullTimeOrPartTime = watch("fullTimeOrPartTime");

  const handleCancel = () => {
    navigate("/");
  };


  useEffect(() => {

    if (contractType === "contract" && fullTimeOrPartTime === "Full-Time") {
      setValue("hoursPerWeek", 38);
    } else if (contractType === "contract" && fullTimeOrPartTime === "Part-Time") {
      setValue("hoursPerWeek", ''); 
    } else if (contractType === "permanent" && fullTimeOrPartTime === "Full-Time") {
      setValue("hoursPerWeek", 38);
    } else if (contractType === "permanent" && fullTimeOrPartTime === "Part-Time") {
      setValue("hoursPerWeek", ''); 
    }

  }, [contractType, fullTimeOrPartTime, setValue]);

  return (
    <div className={classes.employee_details}>
      <h1>Employee Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Personal Information Fields */}
        <div className={classes.form_group}>
          <label>First Name*</label>
          <input
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            defaultValue={defaultValues?.firstName || ""}
          />
          {errors.firstName && <p className={classes.error}>{errors.firstName.message}</p>}
        </div>
        <div className={classes.form_group}>
          <label>Middle Name</label>
          <input type="text" {...register('middleName')} />
        </div>
        <div className={classes.form_group}>
          <label>Last Name*</label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            defaultValue={defaultValues?.lastName || ""}
          />
          {errors.lastName && <p className={classes.error}>{errors.lastName.message}</p>}
        </div>
        <div className={classes.form_group}>
          <label>Email Address*</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            defaultValue={defaultValues?.email || ""}
          />
          {errors.email && <p className={classes.error}>{errors.email.message}</p>}
        </div>
        <div className={classes.form_group}>
          <label>Mobile Number</label>
          <input
            type="tel"
            {...register('mobileNumber', { pattern: /^[0-9]{10}$/ })}
            placeholder="Must be an Australian number"
          />
          {errors.mobileNumber && <p className={classes.error}>Invalid Australian number</p>}
        </div>
        <div className={classes.form_group}>
          <label>Residential Address</label>
          <input
            type="text"
            {...register('residentialAddress')}
            placeholder="123 Example St, Sydney NSW 2000"
          />
        </div>

        {/* Contract Type */}
        <div className={classes.form_group}>
          <label>Contract Type*</label>
          <select {...register('contractType', { required: 'Contract type is required' })}>
            <option value="">Select contract type</option>
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
          </select>
          {errors.contractType && <p className={classes.error}>{errors.contractType.message}</p>}
        </div>

        {/* Conditional fields for Contract Type */}
        {contractType === 'contract' && (
          <>
            <div className={classes.form_group}>
              <label>Start Date*</label>
              <input
                type="date"
                {...register('startDate', { required: 'Start date is required' })}
              />
              {errors.startDate && <p className={classes.error}>{errors.startDate.message}</p>}
            </div>

            <div className={classes.form_group}>
              <label>Finish Date*</label>
              <input
                type="date"
                {...register('finishDate', { required: 'Finish date is required' })}
              />
              {errors.finishDate && <p className={classes.error}>{errors.finishDate.message}</p>}
            </div>
          </>
        )}

        {/* Full-Time/Part-Time for both Contract and Permanent */}
        <div className={classes.form_group}>
          <label>Full-Time or Part-Time*</label>
          <select {...register('fullTimeOrPartTime', { required: 'Please select full-time or part-time' })}>
            <option value="">Select</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
          {errors.fullTimeOrPartTime && <p className={classes.error}>{errors.fullTimeOrPartTime.message}</p>}
        </div>

        {/* Hours Per Week */}
        {(contractType === 'contract' || contractType === 'permanent') && (
          <div className={classes.form_group}>
            <label>Hours Per Week*</label>
            <input
              type="number"
              {...register('hoursPerWeek', { required: contractType === 'contract' || contractType === 'permanent' ? 'Hours per week are required' : undefined })}
              disabled={fullTimeOrPartTime === 'Full-Time'}
              value={watch("hoursPerWeek") || ""}
            />
            {errors.hoursPerWeek && <p className={classes.error}>{errors.hoursPerWeek.message}</p>}
          </div>
        )}

        {/* Submit and Cancel Buttons */}
        <div className={classes.form_group}>
          <button type="button" onClick={handleCancel}>Back</button>
          <button type="submit">{defaultValues ? "Update" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;


