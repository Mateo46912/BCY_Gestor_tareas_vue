import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TareaItem from '../componentes/tarea_item.vue'
import TareaForm from '../componentes/tarea_form.vue'

describe('Pruebas unitarias de componentes de tareas', () => {
  const tareaEjemplo = {
    id: '1',
    title: 'Practica - Estandares HTML',
    completed: false
  }

  it('1. Muestra el título de la tarea y el estado Pendiente en tarea_item.vue', () => {
    const wrapper = mount(TareaItem, {
      props: { tarea: tareaEjemplo },
      global: {
        stubs: ['RouterLink']
      }
    })

    expect(wrapper.text()).toContain('Practica - Estandares HTML')
    expect(wrapper.text()).toContain('Pendiente')
    expect(wrapper.find('p').classes()).not.toContain('completada')
  })

  it('2. Emite el evento completar con el estado invertido al hacer clic en el botón', async () => {
    const wrapper = mount(TareaItem, {
      props: { tarea: tareaEjemplo },
      global: {
        stubs: ['RouterLink']
      }
    })

    const botonCompletar = wrapper.findAll('button')[0]
    await botonCompletar.trigger('click')

    expect(wrapper.emitted('completar')).toBeTruthy()
    expect(wrapper.emitted('completar')[0]).toEqual([
      { id: '1', completed: true }
    ])
  })

  it('3. Emite el evento crear con los datos de la nueva tarea desde tarea_form.vue', async () => {
    const wrapper = mount(TareaForm)

    const inputTitulo = wrapper.find('#titulo')
    await inputTitulo.setValue('Realizar pruebas con Vitest')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('crear')).toBeTruthy()
    expect(wrapper.emitted('crear')[0]).toEqual([
      { title: 'Realizar pruebas con Vitest', completed: false }
    ])
  })
})