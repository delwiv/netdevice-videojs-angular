for D in `find . -type d`; do
    if [ -d "${D}/.git" ]; then
        `git -C ${D} reset --hard origin/master`
    fi
done
