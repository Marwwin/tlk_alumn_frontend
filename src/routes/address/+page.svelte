<section>
  <h1>Byt din adress</h1>
	<form action="post">
		<label> Förnamn <input type="text" name="firstname" id="firstname" /></label>
		<label> Efternamn <input type="text" name="lastname" id="lastname" /></label>
		<label> Tidigare Efternamn <input type="text" name="prev_lastname" id="prev_lastname" /></label>
		<label> Titel <input type="text" name="title" id="title" /></label>
		<label> Adress <input type="text" name="address" id="address" /></label>
		<label> Postnummer <input type="number" name="area_code" id="area_code" /></label>
		<label> Postort <input type="text" name="city" id="city" /></label>
		<label> Telefonnummer <input type="tel" name="telephone" id="telephone" /></label>
		<label> E-Post <input type="email" name="email" id="email" /></label>
	</form>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
    align-items: center;
    flex-direction: column;

		form {
			display: flex;
			flex-direction: column;
			width: min(50vw, 20em);

			label {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
