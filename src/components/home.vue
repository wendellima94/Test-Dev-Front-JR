<template>
  <div>
    <div class="header">
      <Header />
    </div>

    <div class="container">
      <div class="side-bar">
        <Sidebar />
      </div>

      <div class="card-wrapper">
        <ConclusionCard />
        <ProgressCard />
      </div>
    </div>
  </div>
</template>

<script>
import ConclusionCard from "./progress-card.vue";
import ProgressCard from "./conclusion-card.vue";
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "Home",
  components: {
    ConclusionCard,
    ProgressCard,
    Header,
    Sidebar,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 992px) {
  .side-bar,
  .header {
    display: none;
  }
  .container {
    margin-top: 10px;
    width: 100%;

    padding: 16px;
  }
  .card-wrapper {
        width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.container {
  display: flex;
  justify-content: space-between;
}
.card-wrapper {
  width: 90%;
  height: 400px;
  margin: 30px 14px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
}
</style>