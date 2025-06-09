<template>
  <div class="home">
    <main class="main">
      <div class="container">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.description') }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.home {
  min-height: 100vh;
}

.main {
  padding-top: calc(@header-height + @spacing-xl);
  padding-bottom: @spacing-xl;
}
</style> 