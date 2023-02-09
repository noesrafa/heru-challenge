import "../styles/HomePage.css";
import PageLayout from "../components/PageLayout";

import { CalendarIcon } from "../components/Icons";
import { useField } from "../hooks/useField";
import { useDate } from "../hooks/useDate";
import { useState } from "react";

export default function HomePage() {
  const [success, setSuccess] = useState(false);
  const { formattedDate, formattedTime } = useDate();

  // --- VALUES Y PROPS DE INPUTS --- //
  const { reset: resetUsername, ...username } = useField({ type: "text" });
  const { reset: resetUserLastName, ...userLastName } = useField({
    type: "text",
  });
  const { reset: resetEmail, ...email } = useField({ type: "email" });
  const { reset: resetAge, ...age } = useField({ type: "number" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // --- VALIDACIONES --- //
    if (username.value.length < 4) {
      username.setError("Ingresa un nombre valido.");
      return;
    }
    if (userLastName.value.length < 4) {
      userLastName.setError("Ingresa apellidos validos.");
      return;
    }
    if (email.value.length < 4) {
      email.setError("El email es obligatorio.");
      return;
    }
    if (age.value.length < 1) {
      age.setError("Ingresa tu edad para continuar.");
      return;
    }
    if (parseInt(age.value) < 18) {
      age.setError("Debes ser mayor de 18 años para continuar.");
      return;
    }

    // --- FAKE POST CON JSONPLACEHOLDER API --- //
    const data = {
      username: username.value,
      userLastName: userLastName.value,
      email: email.value,
      age: age.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red.");
        }
        return response.json();
      })
      .then((data) => {
        // --- RESET Y MENSAJE DE EXITO --- //
        resetUsername();
        resetUserLastName();
        resetAge();
        resetEmail();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        console.log(data); //Mensaje en consola con la data posteada
      })
      .catch((error) => {
        console.error("Ups, hubo un error, intentelo de nuevo.", error);
      });
  }

  return (
    <PageLayout>
      <section className="home-container">
        <header>
          <h4>¡Bienvenida! 👋</h4>
          <div className="date-container">
            <div className="calendar">
              <CalendarIcon />
              <span>{formattedDate}</span>
            </div>
            <div className="dot" />
            <span>{formattedTime}</span>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <input {...username} name="Username" placeholder="Nombre" />
          {username.error && <p className="error-message">{username.error}</p>}

          {/* APELLIDOS */}
          <input {...userLastName} name="Username" placeholder="Apellidos" />
          {userLastName.error && (
            <p className="error-message">{userLastName.error}</p>
          )}

          {/* EMAIL */}
          <input {...email} name="Username" placeholder="correo@gmail.com" />
          {email.error && <p className="error-message">{email.error}</p>}

          {/* EDAD */}
          <input {...age} name="Username" placeholder="Edad" min="0" max="99" />
          {age.error && <p className="error-message">{age.error}</p>}

          {/* BOTON */}
          {success ? (
            <button className="success">¡Registrado!</button>
          ) : (
            <button>Ingresar</button>
          )}
        </form>
      </section>
    </PageLayout>
  );
}
