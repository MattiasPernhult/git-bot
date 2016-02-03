var reply = {
    commands: {
        commands: [
            'gh: commit  - information about commits.',
            'gh: add     - information about adding files to stage index.',
            'gh: push    - information about pushing',
            'gh: pull    - information about pulling',
            'gh: branch  - information about branches',
            'gh: merge   - information about merging branches',
            'gh: status  - information about your git status',
            'gh: log     - information about the git log'
        ],
        tips: []
    },
    commit: {
        commands: ['git commit -m "message"'],
        tips: [
            'Don\'t forget to add -m',
            'When writing message it\'s possible to have a heading and a paragraph. ' +
            'Start by writing some abstract information which is the heading then ' +
            'hold shift and press Enter key twice, after this you will be adding paragraph.'
        ]
    },
    add: {
        commands: [
            'git add <file>   - adding one file',
            'git add .        - adding all files'
        ],
        tips: []
    },
    push: {
        commands: ['git push origin <branch_name>'],
        tips: ['ALWAYS PULL BEFORE PUSH, ALWAYS!'],
    },
    pull: {
        commands: ['git pull origin <branch_name>'],
        tips: ['Make sure that your working directory status is clean before pulling.']
    },
    branch: {
        commands: [
            'git branch                          - showing all the branches',
            'git checkout <branch_name>          - changing to branch',
            'git branch <new_branch_name>        - creating a new branch',
            'git checkout -b <new_branch_name>   - creating and changing to new branch',
        ],
        tips: [
            'Make sure that you are standing in the correct branch before branching.',
            'Make sure that your working directory is clean before branching.'
        ]
    },
    merge: {
        commands: [
            'git merge <branch_name>',
            'git pull origin <branch_name>'
        ],
        tips: []
    },
    status: {
        commands: [
            'git status'
        ],
        tips: []
    },
    log: {
        commands: [
            'git log'
        ],
        tips: ['By adding --oneline you will get a minified log']
    }
};

module.exports = reply;
