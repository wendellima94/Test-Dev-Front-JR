<template>
  <main class="container">
    <header class="header">
      <section>
        <span class="concluded"> Concluído </span>
        <span class="certified"> Certificado </span>
      </section>

      <section class="header-icons">
        <article >
          <unicon
            name="angle-left"
            width="24"
            fill="#12295b"
            icon-style="line"
          >
          </unicon>
        </article>

        <article >
          <unicon
            name="angle-right"
            width="24"
            fill="#12295b"
            icon-style="line"
          >
          </unicon>
        </article>
      </section>
    </header>

    <section class="title">
      <span
        >Oficina de mosaicos quartzolit <br />
        criando pixel art em mosaico
      </span>
    </section>

    <section class="notices">
      <span>
        Conheça os tipos de coberturas em fibracimento<br />
        disponiveis no mercado e saiba como escolher a<br />
        solução perfeita para seu projeto
      </span>
    </section>

    <section class="info-wrapper">
      <aside>
        <unicon
          name="clock"
          width="16"
          fill="#12295b"
          icon-style="line"
        ></unicon>
        <span>82m</span>
      </aside>

      <aside>
        <unicon
          name="graduation-cap"
          width="16"
          fill="#12295b"
          icon-style="line"
        ></unicon>
        <span>Básico</span>
      </aside>
    </section>

    <section class="btn-container">
      <button class="btn">Baixar meu certificado</button>
      <button class="btn">Refazer curso</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "ConclusionCard",
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;

  min-width: 460px;
  width: 600px;
  height: 300px;

  background-color: var(--dark-grey);

  padding: 16px;
  border-radius: 8px;
}

.container section:nth-child(1) {
  display: flex;
  justify-content: space-around;
}
.concluded {
  width: 90px;
  height: 22px;

  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 12px;

  background-color: var(--green);
  color: #ffffff;
}
.certified {
  width: 90px;
  height: 22px;

  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 12px;

  background-color: var(--purple);
  color: #ffffff;

  margin: 0 0 0 10px;
}

.header-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-icons article:nth-child(1), article:nth-child(2) {
  margin-right: 8px;
  background-color: #DFDBF6;
  border-radius: 4px;
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
  margin: 0 0 0 4px;
}

span {
  color: var(--dark-blue);
}
.title span {
  font-size: 26px;
}

header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.notices span{
  color: #92979C

}

.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  
  border-radius: 8x;

  height: 40px;
}

.btn:nth-child(1) {
  width: 62%;
  color: #ffffff;

  background-color: var(--dark-blue);
}
.btn:nth-child(2) {
  width: 36%;

  background-color: transparent;
  color: var(--dark-blue);

  border: 1px solid var(--dark-blue);
}
.btn {
  text-align: center;
  border-radius: 8px;

  height: 40px;
}
</style>