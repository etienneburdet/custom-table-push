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
    <a href="https://eburdet.opendatasoft.com/explore/dataset/restaurants/table/">See dataset!</a>
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


a {
  text-decoration: underline;
  text-decoration-style: dashed;
  color:black;
  margin-bottom: 4px;
}

a:hover {
  background: linear-gradient(to right, rgb(154, 173, 206), rgb(65, 69, 132));
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
  }
</style>
