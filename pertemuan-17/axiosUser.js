const ambilDataUserAxios = async () => {
    try {
        const { data: { data } } = await axios.get("https://reqres.in/api/users");
        data.forEach(({ first_name, last_name }) => {
            console.log(`${first_name} ${last_name}`); 
        });
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

export { ambilDataUserAxios };
