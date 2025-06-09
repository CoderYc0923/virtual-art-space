<template>
  <div class="projects">
    <main class="main">
      <div class="container">
        <h1>{{ $t('projects.title') }}</h1>
        <p>{{ $t('projects.description') }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.projects {
  min-height: 100vh;
}

.main {
  padding-top: calc(@header-height + @spacing-xl);
  padding-bottom: @spacing-xl;
}
</style> 