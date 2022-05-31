import styles from "../../styles/team.module.css";

export default function Team() {
  return (
    <>
      <div>
        <div className={styles.content}>
          <h2>Our Team</h2>
          <p>
            When an unknown printer took a galley of type and meeting fari
            scrambled it.
          </p>
        </div>
        <div className={styles.cards}>
			{
				team.map((item) => (
					<h2>{item.name}</h2>
					<p>{item.profile}</p>
				))
			}
        </div>
      </div>
    </>
  );
}
const team = [
	{
	  name: "Nabil ATTIA",
	  image: 39,
	  profile: "UI/UX Designer",
	},
	{
		name: "Oussama LABRAHMI",
		image: 39,
		profile: "Web Developer",
	},
	{
		name: "Rida EL-MAZARY",
		image: 39,
		profile: "Web Developer",
	},
	{
		name: "Mohamed Yassir KHALID",
		image: 39,
		profile: "Entrepreneur",
	},
  ];