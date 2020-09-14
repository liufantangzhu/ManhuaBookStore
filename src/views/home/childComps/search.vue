<template>
  <div class="mybody-out">
    <div class="well mybody2 paddingnone" data-aos="fade-left" >
      <div class="panel-body">
        <div class="form-group" style="margin-bottom: 0px;">
          <div class="input-group">
            <input type="text" class="form-control search_input" name="search" placeholder="Search"maxlength="20"> 
            <div class="input-group-btn">
              <button type="submit" class="btn btn-danger search">
                <span class="glyphicon glyphicon-search " aria-hidden="true"></span>搜索
              </button>
            </div>
          </div>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>