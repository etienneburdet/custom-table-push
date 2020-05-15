<script>
  import UrlBar from './components/UrlBar.svelte'
</script>

<main>
  <div id="url-input" class="card">
    <UrlBar/>
  </div>
</main>

<style>
  #url-input {
    width: 800px;
    position: absolute;
    top: 64px;
    left: 128px;
  }
</style>
