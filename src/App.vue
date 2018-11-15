<template>
    <div id="app">
        <main>
            <v-content>
                <v-container>
                    <lib-ui-toolbar>
                        <span slot="title">Foobar</span>
                    </lib-ui-toolbar>
                    <v-layout row wrap>
                        <lib-ui-thing>
                            <h1 slot="header">Hi</h1>
                            <lib-thing message="Now go away"/>
                            <template slot="actions">
                                <lib-ui-render />
                            </template>
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
