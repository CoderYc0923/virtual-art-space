<template>
  <div class="booking">
    <main class="main">
      <div class="container">
        <h1>{{ $t('booking.title') }}</h1>
        <p>{{ $t('booking.description') }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.booking {
  min-height: 100vh;
}

.main {
  padding-top: calc(@header-height + @spacing-xl);
  padding-bottom: @spacing-xl;
}
</style> 