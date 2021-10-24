const EditCost = async (id, cost, driverId) => {

  try {
      const body = { cost };

      const response = await fetch(`http://localhost:5000/cost/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
      });

      console.log("Editinf costtt")
  } catch (error) {
      console.log(error);
  }
};

export default EditCost;