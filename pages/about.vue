<template>
  <div class="about">
    <main class="main">
      <div class="container">
        <h1>{{ $t('about.title') }}</h1>
        <p>{{ $t('about.description') }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.about {
  min-height: 100vh;
}

.main {
  padding-top: calc(@header-height + @spacing-xl);
  padding-bottom: @spacing-xl;
}
</style> 