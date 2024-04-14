

const getHotelsData = async (city) => {
    "use server";
    const response = await fetch(
      `${process.env.BASE_URL}/api/hotels?query=${city}`,{cache:'no-store'}
    );
    if (!response.ok) {
      throw new Error("failed to load the data");
    }
    const data = response.json();
      return data;
  };

export {getHotelsData};

