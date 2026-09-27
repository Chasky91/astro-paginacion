<script setup>
    import { ref, computed } from 'vue'

    const password = ref('')
    const confirm = ref('')

    const coinciden = computed(() =>
        password.value.normalize('NFC') === confirm.value.normalize('NFC')
    )
    const puedeEnviar = computed(() =>
        password.value.length >= 8 && coinciden.value
    )

    async function registrar() {
    if (!puedeEnviar.value) return
        await fetch('/api/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password.value, confirm: confirm.value }),
        })
    }
<script>

<Template>
    <form @submit.prevent="registrar">
        <input v-model="password" type="name" placeholder="Nombre" />
        <input v-model="password" type="email" placeholder="Email" />

        <input v-model="password" type="password" placeholder="Contraseña" />

        <input v-model="password" type="password" placeholder="Contraseña" />
        <input v-model="confirm" type="password" placeholder="Repetir contraseña" />

        <p v-if="confirm && !coinciden" class="error">Las contraseñas no coinciden</p>
        <p v-else-if="confirm && coinciden" class="ok">Las contraseñas coinciden</p>

        <button :disabled="!puedeEnviar">Registrarse</button>
    </form>
    
</Template>