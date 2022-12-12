export const getResumen = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(`https://bebc1f9a-1ff1-4b5b-876e-6bfca3c170f0.mock.pstmn.io/api/order/get_order/PGH-5646?success=true`, {
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