"""Tests for generation parameter defaults in config."""

from sidecar.src import config


class TestMedGemmaConfigDefaults:
    """Verify tuned generation param defaults."""

    def test_temperature(self):
        assert config.MEDGEMMA_TEMPERATURE == 0.35

    def test_repetition_penalty(self):
        assert config.MEDGEMMA_REPETITION_PENALTY == 1.05

    def test_top_p(self):
        assert config.MEDGEMMA_TOP_P == 0.9

    def test_max_tokens(self):
        assert config.MEDGEMMA_MAX_TOKENS == 1500

    def test_repetition_context_size_unchanged(self):
        assert config.MEDGEMMA_REPETITION_CONTEXT_SIZE == 128
