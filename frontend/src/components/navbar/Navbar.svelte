<script>
    import { activeNavItem } from "../stores"
    import "./navbar.css"
</script>

<nav class="navbar" data-id="navbar">
    <a href="/" class="brand link" data-id="link-brand">LEARNING TESTS</a>
    <ul>
        <li>
            <a class="link math {$activeNavItem === 'math' ? 'active' : ''}" href="/math" data-id="link-math">Math</a>
        </li>
        <li>
            <a
                class="link license {$activeNavItem === 'license' ? 'active' : ''}"
                href="/license"
                data-id="link-license">License</a
            >
        </li>
        <li>
            <a
                class="link github"
                href="https://github.com/ltsuda/learning-tests/blob/main/README.md"
                target="_blank"
                data-id="link-github">GitHub</a
            >
        </li>
    </ul>
</nav>
