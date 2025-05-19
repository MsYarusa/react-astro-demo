const About = () => {
  const identity = {
    firstName: "Сара",
    country: "Канада",
    occupation: "Технический писатель",
    hobbies: ["фотография", "наблюдение за птицами", "бейсбол"],
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Astro",
    "Написание документации",
  ];

  return (
    <>
      <h2>... и моем новом сайте на Astro!</h2>
      <p>
        Я прохожу вводный учебник по Astro. Это вторая страница моего сайта, и
        это первая страница, которую я создал самостоятельно!
      </p>
      <p>
        Сайт будет обновляться по мере прохождения учебника, так что заходите
        сюда снова и следите за моим прогрессом!
      </p>

      <p>Несколько фактов обо мне:</p>
      <ul>
        <li>Меня зовут {identity.firstName}.</li>
        <li>
          Моя страна — {identity.country}, а род занятий — {identity.occupation}
          .
        </li>
        {identity.hobbies.length >= 2 && (
          <li>
            Два моих увлечения: {identity.hobbies[0]} и {identity.hobbies[1]}
          </li>
        )}
      </ul>
      <p>Мои навыки:</p>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default About;
