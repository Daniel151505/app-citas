const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Sara</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: {""}
        <span className="font-normal normal-case">sara@gmail-com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">
          10 de Diciembre del 2022
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia
          iure magnam. Neque aut architecto exercitationem natus itaque magni
          nihil voluptates quisquam debitis necessitatibus aliquid, harum odio
          deleniti quae esse!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
