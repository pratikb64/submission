const AppointmentForm = () => {
  return (
    <form className="w-[300px] lg:w-96 lg:px-8 -mt-[74px] sm:-mt-28 lg:-mt-32 bg-primary text-white mx-auto sm:mx-0 p-5 py-8 flex flex-col gap-2">
      <div className="flex flex-col gap-4 pt-3 text-center">
        <span className="text-2xl font-semibold leading-6 lg:text-4xl">
          Schedule an Appointment
        </span>
        <span className="text-sm">
          Here, let visitors know what will happen when they complete your form.
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4 text-sm text-primary">
        <input
          className="p-3 rounded-[4px]"
          required
          placeholder="First Name*"
          type="text"
        />
        <input
          className="p-3 rounded-[4px]"
          required
          placeholder="Last Name*"
          type="text"
        />
        <input
          className="p-3 rounded-[4px]"
          required
          placeholder="Email"
          type="email"
        />
        <input
          className="p-3 rounded-[4px]"
          required
          placeholder="Phone Number*"
          type="text"
          pattern="[\d]{10}"
        />
        <select
          className="p-3"
          name="appointment-type"
          id="appointment-type"
          required
        >
          <option value="">Type of Appointment</option>
          <option value="type-1">Type 1</option>
          <option value="type-2">Type 2</option>
          <option value="type-3">Type 3</option>
        </select>
        <button className="uppercase text-lg bg-secondary text-white px-5 py-3 rounded-[4px] font-semibold">
          Schedule now
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
