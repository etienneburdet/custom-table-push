<script>
  import UrlBar from './components/UrlBar.svelte'
  import EditTable from './components/Table.svelte'
</script>

<main>
  <div id="url-input" class="card">
    <UrlBar/>
  </div>
  <div id="table" class="card">
    <EditTable/>
  </div>
</main>

<style>
  #url-input {
    margin-top: 64px;
    margin-left: 128px;
  }

  #table {
    margin-top: 32px;
    margin-left: 128px;
  }
</style>
