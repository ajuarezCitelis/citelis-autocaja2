export const getResumen = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(`https://ce64-177-224-178-144.ngrok.io/api/order/get_order/PGH-5646?success=true`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        },
      });
      if (response.status !== 200) return "";
      const resumenData= await response.json();
      return resumenData;
      } catch (err) {
      throw err;
      }
  };