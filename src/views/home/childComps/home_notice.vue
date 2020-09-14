<template>
	<div class="mybody-out">
    <div class="well mybody2 alert fade in" role="alert">
      公告:
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="notice_content">
      	<slot></slot>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Notice',
}
</script>