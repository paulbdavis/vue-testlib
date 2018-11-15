<template>
    <div id="app">
        <main>
            <v-content>
                <v-container>
                    <v-layout row wrap>
                        <lib-ui-thing>
                            <h1 slot="header">Hi</h1>
                            <lib-thing message="Now go away"/>
                        </lib-ui-thing>
                    </v-layout>
                </v-container>
            </v-content>
        </main>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
