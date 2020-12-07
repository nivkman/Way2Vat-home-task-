const getResultsFromAPI = async () => {

	const BASE_URL = 'http://foo.bar/data?index=';
	let index = 0;
	let keep_searching = true
	
	try {

		while (keep_searching) {
			let res = await axios.get(`${BASE_URL}${index}`);
			switch (res.status) {
				case 200:
          let s_data = JSON.stringify(res.data);
          fs.appendFile('db.json', s_data);
					index++;
					break;

				case 400:
					throw new UserException('bad input');

				case 500:
					throw new UserException('unavailable');
          
        default:
          throw new UserException('unknown error');

			}


			if (temp.length < 5)
				keep_searching = false;

		}
	} catch (e) {
		console.error(e);
	}
};
