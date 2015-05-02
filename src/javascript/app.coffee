$ ->
  $('#modal').on 'show.bs.modal', (event) ->
    link = $(event.relatedTarget)
    title = link.data 'title'
    imgsrc = link.data 'imgsrc'
    text = link.data 'text'

    modal = $(this)
    modal.find('.modal-title').text title
    modal.find('.modal-img').attr('src', imgsrc)
    modal.find('.modal-text').text text