<template>
  <main class="container">
    <section class="text-progress">
      <span>Em progresso</span>
    </section>

    <section class="title">
      <span
        >Oficina de mosaicos<br />
        quartzolit criando pixel art <br />em mosaico
      </span>
    </section>

    <section class="progress-wrapper">
      <section class="info-wrapper">
        <aside>
    <unicon name="graduation-cap" width="16" fill="gold" icon-style="line"></unicon>
          <span>Básico</span>
        </aside>
        <aside>
        <unicon name="clock" fill="gold" width="16" icon-style="line"></unicon>
          <span>01h30</span>
        </aside>
      </section>
    </section>

    <section>
      <article class="progress-bar"></article>
      <p>78% completo</p>
    </section>
    <button class="btn">Continuar curso</button>
  </main>
</template>

<script>
export default {
  name: "ProgressCard",
};
</script>

<style scoped>
.container {
  background-color: var(--dark-blue);
  min-width: 380px;
  width: 380px;
  height: 300px;

  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 16px 24px;
}

.title span {
  font-size: 26px;
}

p,
span {
  color: #ffffff;
  font-size: 12px;
}

.progress-bar {
  width: 330px;
  height: 10px;

  background-color: var(--progress-bar);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;

  margin: 0 0 8px 0;
}

.progress-bar::before {
  text-align: center;
  content: "";
  height: 8px;
  width: 78%;
  background-color: #ffffff;
  border-radius: 8px;
}
.info-wrapper {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.info-wrapper aside {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 8px 0 0;
}

.info-wrapper span {
  color: white;
  margin: 0 0 0 4px;
}

.btn {
  width: 100%;
  height: 40px;

  border-radius: 6px;

  background-color: var(--yellow);
}

.text-progress {
  width: 90px;
  height: 22px;
  font-size: 16px;

  background-color: #41669a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
}
</style>