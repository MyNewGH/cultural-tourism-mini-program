// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {},
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      subject: '填写简短精炼的变更描述 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },

    types: [
      {
        value: 'feat',
        name: 'feat:     🚀  新增功能 | A new feature',
        emoji: '🚀',
      },
      {
        value: 'fix',
        name: 'fix:      🧩  修复缺陷 | A bug fix',
        emoji: '🧩',
      },
      {
        value: 'docs',
        name: 'docs:     📚  文档更新 | Documentation only changes',
        emoji: '📚',
      },
      {
        value: 'style',
        name: 'style:    🎨  代码格式 | Changes that do not affect the meaning of the code',
        emoji: '🎨',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: '♻️',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  性能优化 | A code change that improves performance',
        emoji: '⚡️',
      },
      {
        value: 'test',
        name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
        emoji: '✅',
      },
      {
        value: 'build',
        name: 'build:    📦️  构建相关 | Changes that affect the build system or external dependencies',
        emoji: '📦️',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts',
        emoji: '🎡',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  回退代码 | Revert to a commit',
        emoji: '⏪️',
      },
      {
        value: 'chore',
        name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files',
        emoji: '🔨',
      },
    ],
    useEmoji: true,
    themeColorCode: '',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    skipQuestions: ['scope', 'body', 'breaking', 'footerPrefix', 'footer'],
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: 100,
    minSubjectLength: 0,
    defaultSubject: '',
  },
};
